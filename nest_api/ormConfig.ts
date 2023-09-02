import dotenv from 'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

dotenv.config();

export const PostgreSqlDataSource = TypeOrmModule.forRootAsync({
  name: 'postgres',
  useFactory: async (config: ConfigService) => ({
    type: 'postgres',
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    username: config.get('DB_USER'),
    password: config.get('DB_PASSWORD'),
    database: config.get('DB_NAME'),
    schema: config.get('DB_SCHEMA'),
    synchronize: true,
    logging: true,
    extra: {
      options: { trustServerCertificate: true },
    },
  }),
  inject: [ConfigService],
});

export const SqliteDataSource = TypeOrmModule.forRootAsync({
  name: 'sqlite',
  useFactory: async () => ({
    type: 'sqlite',
    database: './data/northwind.db',
    extra: {
      options: { trustServerCertificate: true },
    },
  }),
});

// export const WoodsDataSource = TypeOrmModule.forRootAsync({
//   name: 'mssql',
//   useFactory: () => ({
//     type: 'mssql',
//     host: process.env.MSSQL_DB_Instance_HOST,
//     port: Number(process.env.MSSQL_DB_Instance_PORT),
//     username: process.env.MSSQL_DB_Instance_USER,
//     password: process.env.MSSQL_DB_Instance_PASS,
//     database: process.env.MSSQL_DB_NAME_WOODS,
//     entities: ['dist/entities/mssql_Woods/*.js'],
//     extra: {
//       options: { trustServerCertificate: true },
//     },
//   }),
// });
