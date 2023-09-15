import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { QueryHistorySchema } from './entities/chat.history.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ChatHistory', schema: QueryHistorySchema },
    ]),
  ],
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
