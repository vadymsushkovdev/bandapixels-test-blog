import {IServerConfig} from "./interfaces/interface";

export const serverConfig: IServerConfig = {
  port: Number(process.env.PORT) || 3000,
};
