export interface ChatResponse {
    prompt: string;
    sqlQuery: string;
    result: Record<string, string | boolean | number>[];
    error: string;
}
  
  