import express from 'express';
import {json} from 'body-parser';
import router from './router';

const app = express();

app.use(json());

app.use(router);

app.get('/api/users', (req, res) => {
  res.send('Hello');
});

app.listen(4000, () => {
  console.log('Listening on port 4000!!!');
});
