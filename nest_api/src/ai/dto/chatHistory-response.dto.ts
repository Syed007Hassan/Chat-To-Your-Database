export class ChatHistoryResponseDto {
  _id: string;
  prompt: string;
  sqlQuery: string;
  result: Array<any>;
}
