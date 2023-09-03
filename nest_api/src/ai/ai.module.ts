import { Module } from '@nestjs/common';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';
import { PostgreSqlDataSource, SqliteDataSource } from '../../ormConfig';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AiController],
  providers: [AiService],
})
export class AiModule {}
