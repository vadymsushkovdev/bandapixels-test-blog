import { IPostgresOptions } from "./interfaces/interface";

export const postgresOptions: IPostgresOptions = {
  user: `${process.env.POSTGRES_USER}`,
  host: `${process.env.POSTGRES_HOST}`,
  database: `${process.env.POSTGRES_DB}`,
  password: `${process.env.POSTGRES_PASSWORD}`,
  port: Number(process.env.POSTGRES_PORT),
  max: 1000,
  acquire: 30000,
  idle: 10000,
};
