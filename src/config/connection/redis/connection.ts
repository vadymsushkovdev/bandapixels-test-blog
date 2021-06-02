import redis, { RedisClient } from "redis";

const connectOptions: string = `${process.env.REDIS_PATH}:${process.env.REDIS_PORT}`;

class Connection {
  private readonly _options: string;
  private _instance: RedisClient | null;

  constructor(options: string) {
    this._options = options;
    this._instance = null;
  }

  init(): RedisClient {
    const redisClient: RedisClient = redis.createClient(this._options);

    redisClient.on("error", console.error);
    redisClient.on("ready", () =>
      console.log(
        `Connected to redis and listen on ${process.env.REDIS_PORT} port`
      )
    );
    redisClient.on("reconnecting", () => console.log("Reconnecting to redis"));
    redisClient.on("end", () =>
      console.log("The connecting with redis was closed for some reasons")
    );

    return redisClient;
  }

  getInstance(): RedisClient {
    if (!this._instance) {
      this._instance = this.init();
    }

    return this._instance;
  }
}

export default new Connection(connectOptions).getInstance();
