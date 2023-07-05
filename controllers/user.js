import { User } from "../models/user.js";
import bcrypt from "bcrypt";

import { sendCookie } from "../utils/features.js";




//   bcakend for user-login 

  export const login =async( req , res , next) => {
    try {
      
   const {email, password } = req.body;

   const user = await User.findOne({email}).select("+password");

   if( !user) return next(new ErrorHandler("Invalid Email & Password",400));
  
  

   const isMatch = await bcrypt.compare(password, user.password);

   if( !isMatch) return next(new ErrorHandler("Invalid Email & Password",404));

    
   

   sendCookie( user, res ,` Welcome Back ${user.name} ` , 200  );
    } catch (error) {
      next(error);
    }


  };

// backend for register
  export const  register = async (req , res , next) =>{
      try {
        const {name,email,password} =req.body;
   
      let user = await User.findOne({ email });

      if( user ) return next(new ErrorHandler("User Already Exist",400));

     

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash( password ,salt); 

     //user = await User.create({ name, email, hashedPassword }); it same as how it works down
     const doc  =  new User({
      name: name,
      email:email,
      password:hashedPassword

     });
     await doc.save();

    sendCookie( user , res , " Successfully Registered " , 201);

      } catch (error) {
        next(error);
      }
    };

//  backend for getting profile
    export const getMyProfile =  (req,res) =>{
      
      res.status(200)
         .json({
            success:true,
            user:req.user,
         })
     
    };
// backend for logout
    export const logout = (req, res) => {
      res
        .status(200)
        .cookie("token", "", {
          expires: new Date(Date.now ()),
          sameSite: process.env.NODE_ENV === "Develpoment" ? "lax" : "none",
          secure: process.env.NODE_ENV === "Develpoment" ? false : true,
        })
        .json({
          success: true,
          user: req.user,
        }); 
    };