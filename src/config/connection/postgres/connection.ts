import { Sequelize } from 'sequelize';
import { postgresOptions } from '@connection/postgres/config.postgres';

const connection = new Sequelize(
  `${postgresOptions.database}`,
  `${postgresOptions.user}`,
  `${postgresOptions.password}`,
  { host: `${postgresOptions.host}`, dialect: postgresOptions.dialect }
);

connection
  .authenticate()
  .then(() => {
    console.log('Connection to postgres has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to postgres:', err);
  });

export default connection;
