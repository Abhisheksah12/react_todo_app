import express from "express";
import { User } from "../models/user.js"
import {  register , login , getMyProfile, logout } from "../controllers/user.js";
import { isAuthenticate } from "../middlewares/auth.js";

const router = express.Router ();


    router.post("/new",register); 

    router.post("/login",login);

    router.get("/logout",logout);

    router.get("/me", isAuthenticate ,getMyProfile);



export default router;