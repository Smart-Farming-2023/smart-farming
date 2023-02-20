import express from 'express';
import { sendOTP, verifyOTP } from '../controllers/auth.controller.js';


const authRoute=express.Router();

authRoute.post("/send",sendOTP);
authRoute.post("/verify",verifyOTP);

export default authRoute;