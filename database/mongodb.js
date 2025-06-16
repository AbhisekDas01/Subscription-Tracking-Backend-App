import mongoose from "mongoose";
import { DB_URI , NODE_ENV } from "../config/env.js";

//if db uri not exists 
if(!DB_URI){
    throw new Error("Please define the MONGODB_URL in .env file");
    
}

//connect db function 
const connectToDatabase = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${DB_URI}`);

        console.log(`Connected to DB ${NODE_ENV} mode`);


    } catch (error) {
        console.log("Error connection DB", error);
        process.exit(1);
    }
}

export default connectToDatabase;