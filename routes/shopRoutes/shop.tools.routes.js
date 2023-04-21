import express from 'express';
import { createShopTools, getAllShopTools } from '../../controllers/shopControllers/shop.tools.controller.js';


const shopToolsRoute=express.Router();

shopToolsRoute.post("/create",createShopTools);
// plantRoute.post("/update/:id",updateInfo);
shopToolsRoute.post("/getAll",getAllShopTools);
// plantRoute.post("/delete/:id",deleteInfo);

export default shopToolsRoute;