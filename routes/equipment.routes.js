import express from 'express';
import { createEquipment,getAllEquipment } from '../controllers/equipment.controller.js';


const equipmentRoute=express.Router();

equipmentRoute.post("/create",createEquipment);
// plantRoute.post("/update/:id",updateInfo);
equipmentRoute.post("/getAll",getAllEquipment);
// plantRoute.post("/delete/:id",deleteInfo);

export default equipmentRoute;