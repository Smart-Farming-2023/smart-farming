import express from 'express';
import { createLand,getAllLand } from '../controllers/land.controller.js';


const landRoute=express.Router();

landRoute.post("/create",createLand);
// plantRoute.post("/update/:id",updateInfo);
landRoute.post("/getAll",getAllLand);
// plantRoute.post("/delete/:id",deleteInfo);

export default landRoute;