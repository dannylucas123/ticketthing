import express, {json} from "express";
import {errorHandler, NotFoundError, currentUserMw} from '@superdanny/common';
import router from "./router";

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use('/api/tickets', currentUserMw, router);
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

export {app};
