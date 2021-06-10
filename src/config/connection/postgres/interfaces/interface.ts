import { Dialect } from 'sequelize';

export interface IPostgresOptions {
  user: string;
  host: string;
  database: string;
  password: string;
  dialect: Dialect;
}
