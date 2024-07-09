import { MongoClient } from "mongodb";
import 'dotenv/config';


const url = process.env.MONGO_URL;
const client = new MongoClient(url);



export default async function dbConnection(){
    try{
       return (await client.connect()).db("bus_passenger");
    }catch(err){console.log(err); return null}
}

