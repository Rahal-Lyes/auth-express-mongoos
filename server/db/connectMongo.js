
import mongoose from "mongoose"
async function connectDb(){
  try {
    const conn =await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected :${conn.connection.host}`); 
  } catch (error) {
    console.log("error "+ error.message);
    process.exit(1);//1  is failure 0 is success
    
  }
}

export { connectDb };