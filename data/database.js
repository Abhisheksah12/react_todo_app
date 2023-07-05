 import mongoose from "mongoose";


 export const connectDB = ()=> {
    // mongoose connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI,{
   dbName: 'backendapi'
  });
  console.log("Database Connected");
}
 }