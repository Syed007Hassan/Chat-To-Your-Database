import { Injectable, OnModuleInit } from '@nestjs/common';
import { OpenAI } from 'langchain';
// import { createSqlAgent, SqlToolkit } from "langchain/agents/toolkits/sql";
// import { AiResponse } from './dto/ai-response.dto';
import { SqlDatabase } from 'langchain/sql_db';
import { DataSource } from 'typeorm';
import { result } from './constants/results';
// import { SQL_SUFFIX, SQL_PREFIX } from './constants/prompt';

@Injectable()
export class AiService implements OnModuleInit {
    // private executor: any; 
    private model: OpenAI; 
    // private toolkit: SqlToolkit;
    // private aiResponse: AiResponse;

    constructor(private dataSource: DataSource) {}

    async onModuleInit() {

        const db = await SqlDatabase.fromDataSourceParams({
            appDataSource: this.dataSource,
        });

        this.model = new OpenAI({
            openAIApiKey: process.env.OPENAI_API_KEY,
            temperature: 0,
        });
        console.log('my model' + JSON.stringify(this.model));

        // this.toolkit = new SqlToolkit(db);

        // this.executor = createSqlAgent(this.model, this.toolkit);
    }

    async chat(prompt: string){

        return result;

        // try {
        //     const result = await this.executor.call({ input: prompt });
        
        //     result.intermediateSteps.forEach((step) => {
        //       if (step.action.tool === "query-sql") {
        //         this.aiResponse.prompt = prompt;
        //         this.aiResponse.sqlQuery = step.action.toolInput;
        //         this.aiResponse.result = JSON.parse(step.observation);
        //       }
        //     });
        
        //     console.log(
        //       `Intermediate steps ${JSON.stringify(result.intermediateSteps, null, 2)}`
        //     );
        
        //     return this.aiResponse;
        //   } catch (e) {
        //     console.log(e + " " + "my error message");
        //     this.aiResponse.error = "Server error. Try again with a different prompt.";
        
        //     return this.aiResponse;
        //   }
    }
}
