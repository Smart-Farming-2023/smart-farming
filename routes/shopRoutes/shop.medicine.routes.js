import express from 'express';
import { createShopMedicine, getAllShopMedicine } from '../../controllers/shopControllers/shop.medicine.controller.js';


const shopMedicineRoute=express.Router();

shopMedicineRoute.post("/create",createShopMedicine);
// plantRoute.post("/update/:id",updateInfo);
shopMedicineRoute.post("/getAll",getAllShopMedicine);
// plantRoute.post("/delete/:id",deleteInfo);

export default shopMedicineRoute;