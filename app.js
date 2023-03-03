import express from 'express';
import authRoute from './routes/auth.routes.js';
import bodyParser from 'body-parser';
import userRoute from './routes/user.routes.js';
import screenRoute from './routes/screen.routes.js';
import infoCatRoute from './routes/info.cat.routes.js';
import contactRoute from './routes/contact.routes.js';
import weblinkRoute from './routes/weblink.routes.js';

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


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})