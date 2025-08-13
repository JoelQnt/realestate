import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_STRING);
    console.log("database connected");
  } catch (error) {
    console.log(error)
    throw new Error(error);  
  }
}; 
export default connectDatabase;
  