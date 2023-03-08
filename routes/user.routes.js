import express from 'express';
import { createUser,isUserExists} from '../controllers/user.controller.js';


const userRoute=express.Router();

userRoute.post("/create",createUser);
userRoute.post("/isExist",isUserExists);

export default userRoute;