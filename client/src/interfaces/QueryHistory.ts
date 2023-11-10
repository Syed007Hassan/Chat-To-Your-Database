export interface QueryHistory {
    _id: string; 
    prompt: string;
    sqlQuery: string;
    result: Array<any>;
}