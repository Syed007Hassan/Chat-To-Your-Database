import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PostgreSqlDataSource, SqliteDataSource } from '../ormConfig';

import { MongooseModule } from '@nestjs/mongoose';
import { AiModule } from './ai/ai.module';
// import { AuthModule } from './auth/auth.module';
// import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    PostgreSqlDataSource,
    SqliteDataSource,
    AiModule,
    // AuthModule,
    // UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [ConfigModule],
})
export class AppModule {}
