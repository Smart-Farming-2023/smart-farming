import express from 'express';
import { createFertilizer,getAllFertilizer } from '../controllers/fertillizer.controller.js';


const fertillizerRoute=express.Router();

fertillizerRoute.post("/create",createFertilizer);
// plantRoute.post("/update/:id",updateInfo);
fertillizerRoute.post("/getAll",getAllFertilizer);
// plantRoute.post("/delete/:id",deleteInfo);

export default fertillizerRoute;