export interface QueryHistory {
    _id: string; 
    prompt: string;
    sqlQuery: string;
    queryResult: Array<any>;
}