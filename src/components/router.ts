import { Application } from 'express';
import http from 'http';
import AuthRouter from './Auth/router';
import { env } from '@env.config/env.config';
import session, { Cookie } from "express-session";
import redisConnection from 'connect-redis';
import { redisClient } from '@connection/redis/connection';

export let redisStore = redisConnection(session);

export const store = new redisStore({ client: redisClient });

declare module 'express-session' { interface Cookie { id: number; } }

export const mountRouter = (app: Application) => {
  app.use(session({
    name: env.SESSION_NAME,
    secret: env.SESSION_SECRET,
    cookie: { secure: env.NODE_ENV === 'production' },
    resave: true,
    saveUninitialized: false,
    store: store
  }));
  app.use(AuthRouter);
  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });
};
