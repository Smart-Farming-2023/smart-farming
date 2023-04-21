import express from 'express';
import { createShop, getAllShop } from '../../controllers/shopControllers/shop.controller.js';


const shopRoute=express.Router();

shopRoute.post("/create",createShop);
// plantRoute.post("/update/:id",updateInfo);
shopRoute.post("/getAll",getAllShop);
// plantRoute.post("/delete/:id",deleteInfo);

export default shopRoute;