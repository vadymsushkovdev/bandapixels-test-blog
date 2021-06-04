import { Application } from 'express';
import http from 'http';

export const mountRouter = (app: Application) => {
  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });
}
