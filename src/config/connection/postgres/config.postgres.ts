import { IPostgresOptions } from './interfaces/interface';
import { env } from '@env.config/env.config';

export const postgresOptions: IPostgresOptions = {
  user: env.POSTGRES_USER,
  host: env.POSTGRES_HOST,
  database: env.POSTGRES_DEV_DB,
  password: env.POSTGRES_PASSWORD,
  dialect: 'postgres',
};
