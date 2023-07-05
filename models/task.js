import mongoose from "mongoose";


// creating schema

const schema =new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    isCompleted:{
        type: Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "user",
        required: true,

    },
    createdAt:{
        type: Date,
        deafault: Date.now(),
    }
 });
 
 // creating model
 
  export const Task = mongoose.model("Task",schema);
