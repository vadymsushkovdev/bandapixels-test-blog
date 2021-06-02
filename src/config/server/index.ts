import express from 'express';
import 'module-alias/register';
import serverConfig from './config.server'
import { Middleware } from '@middleware/middleware';
import Routes from '@components/router';

const app = express();

Middleware(app);

Routes(app);

app.set('port', serverConfig.port);

app.listen(app.get('port'), () =>
  console.log(`Listening on ${app.get('port')} port`)
);
