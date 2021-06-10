import express from 'express';
import 'module-alias/register';
import { serverConfig } from './config.server';
import { mountMiddleware } from '@middleware/middleware';
import { mountRouter } from '@components/router';

const app = express();

mountMiddleware(app);

mountRouter(app);

app.set('port', serverConfig.port);

app.listen(app.get('port'), () =>
  console.log(`Listening on ${app.get('port')} port`)
);
