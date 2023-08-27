import { Controller, Get, Param } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiResponse } from './dto/ai-response.dto';

@Controller('ai')
export class AiController {

    constructor(private readonly aiService: AiService){}

    @Get('chat/:prompt')
    async chat(@Param('prompt') prompt: string): Promise<{success:boolean, data?: AiResponse, message?: string}>{
        try {
            const aiResponse: AiResponse = await this.aiService.chat(prompt);
            // console.log(aiResponse);
            return {success: true, data: aiResponse};
        }
        catch(err){
            return { success: false, message: err.message };
        }
    }

}
