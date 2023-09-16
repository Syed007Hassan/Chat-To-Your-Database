import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type QueryHistoryDocument = QueryHistory & Document;

@Schema()
export class QueryHistory {
  @Prop({ type: mongoose.Schema.Types.ObjectId, auto: true })
  _id: string;

  @Prop({ required: true })
  prompt: string;

  @Prop({ required: true })
  sqlQuery: string;

  @Prop({ required: true })
  queryResult: Array<any>;
}

export const QueryHistorySchema = SchemaFactory.createForClass(QueryHistory);
