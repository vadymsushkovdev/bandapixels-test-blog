import { Model } from "sequelize";

export interface IUserModel extends Model {
  id: number;
  login: string;
  name: string;
  password: string;
}
