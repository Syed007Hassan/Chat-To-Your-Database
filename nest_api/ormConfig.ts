import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

configDotenv();

export const PostgreSqlDataSource = TypeOrmModule.forRootAsync({
  name: 'postgres',
  useFactory: async (config: ConfigService) => ({
    type: 'postgres',
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    schema: process.env.DB_SCHEMA,
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }),
  inject: [ConfigService],
});

export const SqliteDataSource = TypeOrmModule.forRootAsync({
  name: 'sqlite',
  useFactory: async () => ({
    type: 'sqlite',
    database: './data/northwind.db',
  }),
});
