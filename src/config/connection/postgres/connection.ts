import { Pool } from 'pg';
import IConnectOptions from './interfaces/interface';

const connectOptions: IConnectOptions = {
    user: `${ process.env.POSTGRES_USER }`,
    host: `${ process.env.POSTGRES_HOST }`,
    database: `${ process.env.POSTGRES_DB }`,
    password: `${ process.env.POSTGRES_PASSWORD }`,
    port:  Number( process.env.POSTGRES_PORT ),
    max: 1000,
};

class Connection {
    private readonly _options: IConnectOptions;
    private _instance: Pool | null;

    constructor(options: IConnectOptions) {
        this._options = options;
        this._instance = null;
    }

    init(): Pool {
        const pool: Pool = new Pool(connectOptions);
        pool.connect((err, client, release) => {
            if (err) {
                return console.error('Error acquiring client', err.stack)
            }
            client.query('SELECT NOW()', (err, result) => {
                release()
                if (err) {
                    return console.error('Error executing query', err.stack)
                }
                console.log(result.rows)
            })
        });

        return pool;
    }

    getInstance(): Pool {
        if (!this._instance) { this._instance = this.init(); }

        return this._instance;
    }
}

export default new Connection(connectOptions).getInstance();

