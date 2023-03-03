import express from 'express';
import { getHome} from '../controllers/screen.controller.js';


const screenRoute=express.Router();

screenRoute.post("/home",getHome);

export default screenRoute;