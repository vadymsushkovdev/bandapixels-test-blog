import { IServerConfig } from './interfaces/interface';
import { env } from '@env.config/env.config';

export const serverConfig: IServerConfig = {
  port: env.PORT ?? 3000,
};
