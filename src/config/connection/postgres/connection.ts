import sequelize from 'sequelize';
import { postgresOptions } from './config.postgres';

export const connection = new sequelize.Sequelize(
  postgresOptions.database,
  postgresOptions.user,
  postgresOptions.password,
  {
    port: postgresOptions.port,
    host: postgresOptions.host,
    dialect: "postgres",
    pool: {
      min: 0,
      max: postgresOptions.max,
      acquire: postgresOptions.acquire,
      idle: postgresOptions.idle,
    },
  }
);
