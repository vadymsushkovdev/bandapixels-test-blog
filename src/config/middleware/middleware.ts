import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import type { Application } from "express";

const Middleware = (app: Application) => {
  app.use(helmet());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(compression());
  app.use(cors());
};

export default Middleware;
