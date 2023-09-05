import { configDotenv } from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

configDotenv();

export const PostgreSqlDataSource = TypeOrmModule.forRootAsync({
  name: 'postgres',
  useFactory: async (config: ConfigService) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    username: config.get('DB_USER'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
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

export const MssqlDataSource = TypeOrmModule.forRootAsync({
  name: 'mssql',
  useFactory: async (config: ConfigService) => ({
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'syed-hassan',
    password: '',
    database: 'Elegant motors',
  }),
  inject: [ConfigService],
});
