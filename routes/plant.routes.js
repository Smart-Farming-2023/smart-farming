import express from 'express';
import { createPlant,getAllPlant } from '../controllers/plant.controller.js';


const plantRoute=express.Router();

plantRoute.post("/create",createPlant);
// plantRoute.post("/update/:id",updateInfo);
plantRoute.post("/getAll",getAllPlant);
// plantRoute.post("/delete/:id",deleteInfo);

export default plantRoute;