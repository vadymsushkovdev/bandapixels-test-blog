import express from 'express';
import 'module-alias/register';
import Middleware from "@middleware/middleware";
import Routes from "@components/router";

const app = express();

Middleware.configure(app);

Routes(app);

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => console.log(`Listening on ${app.get('port')} port`));
