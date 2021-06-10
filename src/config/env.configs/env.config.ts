import { load } from 'ts-dotenv';

export const env = load({
  NODE_ENV: String,
  PORT: Number,
  POSTGRES_USER: String,
  POSTGRES_PASSWORD: String,
  POSTGRES_DEV_DB: String,
  POSTGRES_HOST: String,
  POSTGRES_PORT: Number,
  REDIS_PATH: String,
  REDIS_PORT: Number,
  BCRYPT_SALT_ROUNDS: Number,
  SESSION_SECRET: String,
  SESSION_NAME: String,
  REDIS_HOST: String
});
