'use strict';

import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import connection  from '@connection/postgres/connection';

const basename = path.basename(__filename);
const db = {
  sequelize: Sequelize.Sequelize
};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js' ?? '.ts');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(connection, Sequelize.DataTypes);
    // @ts-expect-error
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  // @ts-expect-error
  if (db[modelName].associate) {
    // @ts-expect-error
    db[modelName].associate(db);
  }
});

// @ts-expect-error
db.sequelize = connection;
// @ts-expect-error
db.Sequelize = Sequelize;

module.exports = db;
