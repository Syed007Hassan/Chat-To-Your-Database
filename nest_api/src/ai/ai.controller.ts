import { Controller, Get, Param, Query } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiResponse } from './dto/ai-response.dto';
import { ChatHistoryResponseDto } from './dto/chatHistory-response.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Get('chat')
  async chat(
    @Query('prompt') prompt: string,
  ): Promise<{ success: boolean; data?: AiResponse; message?: string }> {
    try {
      const aiResponse: AiResponse = await this.aiService.chat(prompt);
      // console.log(aiResponse);
      return { success: true, data: aiResponse };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }

  @Get('getAllChatHistory')
  async getAllChatHistory(): Promise<{
    success: boolean;
    data?: Array<ChatHistoryResponseDto>;
    message?: string;
  }> {
    try {
      const chatHistory: Array<ChatHistoryResponseDto> =
        await this.aiService.getAllChatHistory();
      return { success: true, data: chatHistory };
    } catch (err) {
      return { success: false, message: err.message };
    }
  }
}
