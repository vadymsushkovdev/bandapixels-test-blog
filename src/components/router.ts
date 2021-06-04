import express, {Application} from 'express';
import http from 'http';

export const Router = (app: Application) => {
  const router: express.Router = express.Router();

  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });
  app.use(router);
}
