import { Injectable, OnModuleInit } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';
import { ChatGroq } from '@langchain/groq';
import { createSqlAgent, SqlToolkit } from 'langchain/agents/toolkits/sql';
import { SqlDatabase } from 'langchain/sql_db';
import { DataSource } from 'typeorm';
import { SQL_SUFFIX, SQL_PREFIX } from './constants/prompt';
import { InjectDataSource } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QueryHistory } from './entities/chat.history.entity';
import { AiResponse } from './dto/ai-response.dto';
import { ChatHistoryResponseDto } from './dto/chatHistory-response.dto';

@Injectable()
export class AiService implements OnModuleInit {
  private executor: any;
  private model: any;
  private toolkit: SqlToolkit;

  constructor(
    @InjectDataSource('postgres') private postgresDataSource: DataSource,
    @InjectDataSource('sqlite') private sqliteDataSource: DataSource,
    @InjectModel('ChatHistory')
    private readonly chatHistoryModel: Model<QueryHistory>,
  ) {}

  async onModuleInit() {
    const postgresDb = await SqlDatabase.fromDataSourceParams({
      appDataSource: this.postgresDataSource,
    });

    const sqliteDb = await SqlDatabase.fromDataSourceParams({
      appDataSource: this.sqliteDataSource,
    });

    // Configure LLM based on environment variables
    const llmProvider = process.env.LLM_PROVIDER || 'groq';

    if (llmProvider === 'groq') {
      this.model = new ChatGroq({
        apiKey: process.env.GROQ_API_KEY,
        model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
        temperature: 0.1,
        maxTokens: 4096,
        streaming: true,
      });
    } else if (llmProvider === 'openai') {
      this.model = new OpenAI({
        openAIApiKey: process.env.OPENAI_API_KEY,
        temperature: 0,
      });
    } else {
      throw new Error(`Unsupported LLM provider: ${llmProvider}`);
    }

    this.toolkit = new SqlToolkit(postgresDb);

    this.executor = createSqlAgent(this.model, this.toolkit, {
      topK: 20,
      prefix: SQL_PREFIX,
      suffix: SQL_SUFFIX,
    });
  }

  async chat(prompt: string): Promise<AiResponse> {
    let aiResponse = new AiResponse();
    aiResponse.prompt = prompt;

    try {
      const result = await this.executor.call({ input: prompt });

      if (!result || !result.intermediateSteps) {
        aiResponse.error = 'No response from LLM. Please try again.';
        return aiResponse;
      }

      aiResponse.sqlQuery = 'No SQL generated';
      aiResponse.result = [];

      result.intermediateSteps.forEach((step) => {
        if (step.action.tool === 'query-sql') {
          aiResponse.sqlQuery = step.action.toolInput;
          aiResponse.sqlQuery = aiResponse.sqlQuery
            .replace(/\\/g, '')
            .replace(/"/g, '');
          try {
            const observation = JSON.parse(step.observation);
            if (
              Array.isArray(observation) &&
              observation.every((obj) => typeof obj === 'object')
            ) {
              aiResponse.result = observation;
            }
          } catch (error) {
            // ignore JSON parse errors for non-JSON observations
          }
        }
      });

      if (aiResponse.sqlQuery && aiResponse.sqlQuery !== 'No SQL generated') {
        const chatHistory = new this.chatHistoryModel({
          prompt: aiResponse.prompt,
          sqlQuery: aiResponse.sqlQuery,
          queryResult: aiResponse.result,
        });
        await chatHistory.save();
      }

      return aiResponse;
    } catch (e) {
      console.error('AI Service Error:', e);
      aiResponse.error = `Server error: ${e.message || 'Try again with a different prompt.'}`;
      return aiResponse;
    }
  }

  async getAllChatHistory(): Promise<Array<ChatHistoryResponseDto>> {
    const chatHistory: Array<QueryHistory> = await this.chatHistoryModel.find();

    if (!chatHistory) {
      return [];
    }

    const chatHistoryResponse: Array<ChatHistoryResponseDto> = chatHistory.map(
      (history) => {
        const chatHistoryResponseDto = new ChatHistoryResponseDto();
        chatHistoryResponseDto._id = history._id;
        chatHistoryResponseDto.prompt = history.prompt;
        chatHistoryResponseDto.sqlQuery = history.sqlQuery;
        chatHistoryResponseDto.result = history.queryResult;
        return chatHistoryResponseDto;
      },
    );
    return chatHistoryResponse;
  }
}
