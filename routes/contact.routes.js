import express from 'express';
import { createContact,updateContact,getAllContact,deleteContact } from '../controllers/contact.controller.js';


const contactRoute=express.Router();

contactRoute.post("/create",createContact);
contactRoute.post("/update/:id",updateContact);
contactRoute.post("/getAll",getAllContact);
contactRoute.post("/delete/:id",deleteContact);

export default contactRoute;