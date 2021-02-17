import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(process.env.RUN_PORT, () => console.log("server running in port 3333"));
