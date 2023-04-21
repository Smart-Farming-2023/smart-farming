import express from 'express';
import { createFertilizer,getAllFertilizer } from '../controllers/fertillizer.controller.js';


const fertilizerRoute=express.Router();

fertilizerRoute.post("/create",createFertilizer);
// plantRoute.post("/update/:id",updateInfo);
fertilizerRoute.post("/getAll",getAllFertilizer);
// plantRoute.post("/delete/:id",deleteInfo);

export default fertilizerRoute;