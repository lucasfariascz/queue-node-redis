import 'dotenv/config';
import express from 'express';
import routes from './app/routes/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server Run");
})
