import express from 'express';
import cors from 'cors';

import busRouter from "./routes/bus.js";

export const app = express();

app.use(cors());
app.use(express.json())
app.use(busRouter);


