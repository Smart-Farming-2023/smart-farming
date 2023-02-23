import express from 'express';
import authRoute from './routes/auth.routes.js';
import bodyParser from 'body-parser';

const app=express();
const PORT=process.env.PORT || 8000;

app.use(express.urlencoded({extended:false}))
app.use(bodyParser.json()) 

app.get("/",(req,res)=>{
    console.log("Jay Swaminarayan");
    res.send("Jay Swaminarayan Smart Farming");

})

app.use("/auth",authRoute);


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})