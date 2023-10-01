import express, {json} from "express";
import errorHandler from "./errors/handler";
import {NotFoundError} from "./errors/not-found-error";
import currentUserMw from "./middlewares/current-user";
import router from "./router";

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use('/api/users', currentUserMw, router);
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export {app};
