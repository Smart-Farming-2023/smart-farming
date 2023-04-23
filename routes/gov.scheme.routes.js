import express from 'express';
import { creategovScheme, getAllGovScheme } from '../controllers/gov.scheme.controller.js';


const govSchemeRoute=express.Router();

govSchemeRoute.post("/create",creategovScheme);
// plantRoute.post("/update/:id",updateInfo);
govSchemeRoute.post("/getAll",getAllGovScheme);
// plantRoute.post("/delete/:id",deleteInfo);

export default govSchemeRoute;