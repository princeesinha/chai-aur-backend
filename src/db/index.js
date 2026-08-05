import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {

        console.log("MONGODB_URI =", process.env.MONGODB_URI);
        console.log("DB_NAME =", DB_NAME);

        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log("MongoDB Connected");
        console.log("DB Name:", connectionInstance.connection.name);
        console.log("Host:", connectionInstance.connection.host);

    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectDB;