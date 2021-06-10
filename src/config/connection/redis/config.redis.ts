import { IRedisOptions } from './interfaces/interface';
import { env } from '@env.config/env.config';

export const redisOptions: IRedisOptions = {
  redisPath: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
};
