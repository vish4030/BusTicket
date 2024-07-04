
import { app } from "./app.js";
import dbConnection from "./db/db.config.js";


app.listen(process.env.PORT,()=>{console.log(`server working at port ${process.env.PORT}`)})