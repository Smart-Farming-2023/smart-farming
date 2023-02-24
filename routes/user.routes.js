import express from 'express';
import { createUser} from '../controllers/user.controller.js';


const userRoute=express.Router();

userRoute.post("/create",createUser);

export default userRoute;