import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QueryHistoryDocument = QueryHistory & Document;

@Schema()
export class QueryHistory {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  prompt: string;

  @Prop({ required: true })
  sqlQuery: string;

  @Prop({ required: true })
  queryResult: Array<any>;
}

export const QueryHistorySchema = SchemaFactory.createForClass(QueryHistory);
