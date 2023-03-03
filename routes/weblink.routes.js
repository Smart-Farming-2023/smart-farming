import express from 'express';
import { createWebLink,updateWebLink,getAllWebLink,deleteWebLink } from '../controllers/weblink.controller.js';


const weblinkRoute=express.Router();

weblinkRoute.post("/create",createWebLink);
weblinkRoute.post("/update/:id",updateWebLink);
weblinkRoute.post("/getAll",getAllWebLink);
weblinkRoute.post("/delete/:id",deleteWebLink);

export default weblinkRoute;