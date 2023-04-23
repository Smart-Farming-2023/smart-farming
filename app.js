import express from 'express';
import authRoute from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import userRoute from './routes/user.routes.js';
import screenRoute from './routes/screen.routes.js';
import infoCatRoute from './routes/info.cat.routes.js';
import contactRoute from './routes/contact.routes.js';
import weblinkRoute from './routes/weblink.routes.js';
import plantRoute from './routes/plant.routes.js';
import landRoute from './routes/land.routes.js';
import medicineRoute from './routes/medicine.routes.js';
import equipmentRoute from './routes/equipment.routes.js';
import fertillizerRoute from './routes/fertillizer.routes.js';
import shopRoute from './routes/shopRoutes/shop.routes.js';
import shopMedicineRoute from './routes/shopRoutes/shop.medicine.routes.js';
import shopToolsRoute from './routes/shopRoutes/shop.tools.routes.js';
import shopPlantRoute from './routes/shopRoutes/shop.plant.routes.js';
import govSchemeRoute from './routes/gov.scheme.routes.js';

const app=express();
const PORT=process.env.PORT || 8000;

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json()) 

app.get("/",(req,res)=>{
    console.log("Jay Swaminarayan");
    res.send("Jay Swaminarayan Smart Farming");

})

app.use("/auth",authRoute);
app.use("/user",userRoute);
app.use("/screen",screenRoute);
app.use("/infoCat",infoCatRoute);
app.use("/contact",contactRoute);
app.use("/webLink",weblinkRoute);
app.use("/plant",plantRoute);
app.use("/land",landRoute);
app.use("/medicine",medicineRoute);
app.use("/equipment",equipmentRoute);
app.use("/fertillizer",fertillizerRoute);
app.use("/shop",shopRoute);
app.use("/shopMedicine",shopMedicineRoute);
app.use("/shopTools",shopToolsRoute);
app.use("/shopPlant",shopPlantRoute);
app.use("/govScheme",govSchemeRoute);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})