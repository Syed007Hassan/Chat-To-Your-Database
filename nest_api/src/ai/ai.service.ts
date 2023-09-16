import { Injectable, OnModuleInit } from '@nestjs/common';
import { OpenAI } from 'langchain/llms/openai';
import { createSqlAgent, SqlToolkit } from 'langchain/agents/toolkits/sql';
import { SqlDatabase } from 'langchain/sql_db';
import { DataSource } from 'typeorm';
import { RESULT } from './constants/results';
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
  private model: OpenAI;
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

    this.model = new OpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      temperature: 0,
    });

    this.toolkit = new SqlToolkit(postgresDb);

    this.executor = createSqlAgent(this.model, this.toolkit, {
      topK: 10,
      prefix: SQL_PREFIX,
      suffix: SQL_SUFFIX,
    });
  }

  async chat(prompt: string): Promise<AiResponse> {
    let aiResponse = new AiResponse();

    try {
      // const result = await this.executor.call({ input: prompt });

      // dummy result
      const result = RESULT;

      result.intermediateSteps.forEach((step) => {
        if (step.action.tool === 'query-sql') {
          aiResponse.prompt = prompt;
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
            console.log(error);
          }
        }
      });

      // console.log(
      //   `Intermediate steps ${JSON.stringify(
      //     result.intermediateSteps,
      //     null,
      //     2,
      //   )}`,
      // );

      const chatHistory = new this.chatHistoryModel({
        prompt: aiResponse.prompt,
        sqlQuery: aiResponse.sqlQuery,
        queryResult: aiResponse.result,
      });

      await chatHistory.save();

      return aiResponse;
    } catch (e) {
      console.log(e + ' ' + 'my error message');
      aiResponse.error = 'Server error. Try again with a different prompt.';

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
