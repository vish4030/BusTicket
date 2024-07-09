
import dbConnection from "../db/db.config.js";


export const retrieveBus = async(req, res)=>{
    const{start, destination} = req?.query;
    const db = await dbConnection();
    const data  = await db.collection("bus_info").find({'start':start, 'destination':destination}).toArray();
    res.send(data);
}