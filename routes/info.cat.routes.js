import express from 'express';
import { createInfo,updateInfo,getAllInfo,deleteInfo } from '../controllers/info.cat.controller.js';


const infoCatRoute=express.Router();

infoCatRoute.post("/create",createInfo);
infoCatRoute.post("/update/:id",updateInfo);
infoCatRoute.post("/getAll",getAllInfo);
infoCatRoute.post("/delete/:id",deleteInfo);

export default infoCatRoute;