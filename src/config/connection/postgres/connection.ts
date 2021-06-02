import sequelize from "sequelize";
import IConnectOptions from "./interfaces/interface";
import postgresOptions from "./config.postgres";

class Connection {
  private readonly _options: IConnectOptions;
  private _instance: sequelize.Sequelize | null;

  constructor(options: IConnectOptions) {
    this._options = options;
    this._instance = null;
  }

  init(): sequelize.Sequelize {
    const connection: sequelize.Sequelize = new sequelize.Sequelize(
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

    return connection;
  }

  getInstance(): sequelize.Sequelize {
    if (!this._instance) {
      this._instance = this.init();
    }

    return this._instance;
  }
}

export default new Connection(postgresOptions).getInstance();
