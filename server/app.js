import express from 'express';
import cors from 'cors';

import dataRouter from "./routes/data.js";
import restaurantRouter from "./routes/restaurant.js"

export const app = express();

app.use(cors());
app.use(dataRouter);
app.use(restaurantRouter);

