import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ChatHistoryDocument = ChatHistory & Document;

@Schema()
export class ChatHistory {
  @Prop({ required: true })
  promptQuery: string;

  @Prop({ required: true })
  promptResult: string;
}

export const ChatHistorySchema = SchemaFactory.createForClass(ChatHistory);
