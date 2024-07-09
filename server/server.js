
import { app } from "./app.js";

app.listen(process.env.PORT,()=>{console.log(`server working at port ${process.env.PORT}`)})