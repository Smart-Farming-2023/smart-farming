import express from 'express';
import { createMedicine,getAllMedicine } from '../controllers/medicine.controller.js';


const medicineRoute=express.Router();

medicineRoute.post("/create",createMedicine);
// plantRoute.post("/update/:id",updateInfo);
medicineRoute.post("/getAll",getAllMedicine);
// plantRoute.post("/delete/:id",deleteInfo);

export default medicineRoute;