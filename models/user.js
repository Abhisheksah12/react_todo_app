import mongoose from "mongoose";


// creating schema

const schema =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        select: false,
        required: true,
    },
    createdAt:{
        type: Date,
        deafault: Date.now,
    }
 });
 
 // creating model
 
  export const User = mongoose.model("User",schema);

