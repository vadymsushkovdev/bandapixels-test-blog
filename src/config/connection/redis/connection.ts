import { RedisClient, createClient } from 'redis';
import { redisOptions } from './config.redis';

export const redisClient: RedisClient = createClient(redisOptions.redisPath);

redisClient.on('error', console.error);
redisClient.on('ready', () =>
  console.log(`Connected to redis and listen on ${process.env.REDIS_PORT} port`)
);
redisClient.on('reconnecting', () => console.log('Reconnecting to redis'));
redisClient.on('end', () =>
  console.log('The connecting with redis was closed for some reasons')
);
