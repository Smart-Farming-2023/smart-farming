import express from 'express';
import { createShopPlant, getAllShopPlant } from '../../controllers/shopControllers/shop.plant.controller.js';


const shopPlantRoute=express.Router();

shopPlantRoute.post("/create",createShopPlant);
// plantRoute.post("/update/:id",updateInfo);
shopPlantRoute.post("/getAll",getAllShopPlant);
// plantRoute.post("/delete/:id",deleteInfo);

export default shopPlantRoute;