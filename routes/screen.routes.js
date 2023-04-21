import express from 'express';
import { getHome, getShop} from '../controllers/screen.controller.js';


const screenRoute=express.Router();

screenRoute.post("/home",getHome);
screenRoute.post("/shop",getShop);

export default screenRoute;