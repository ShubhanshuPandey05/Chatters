import mongoose from "mongoose";
const connectToMongodb = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to data base");
    } catch (error) {
        console.log("Error in connecting the mongodb",error);
    }
}

export default connectToMongodb;