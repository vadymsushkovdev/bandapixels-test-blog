import {IRedisOptions} from "./interfaces/interface";

export const redisOptions: IRedisOptions = {
  redisPath: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
};
