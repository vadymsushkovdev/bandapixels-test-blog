import { load } from 'ts-dotenv';

export const env = load({
  PORT: Number,
  POSTGRES_USER: String,
  POSTGRES_PASSWORD: String,
  POSTGRES_DB: String,
  POSTGRES_HOST: String,
  POSTGRES_PORT: Number,
  REDIS_PATH: String,
  REDIS_PORT: Number,
});
