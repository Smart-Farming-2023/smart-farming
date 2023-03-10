import express from 'express';
// const otpGenerator = require('otp-generator')
import otpGenerator from "otp-generator";
import OTP from '../models/otp.model.js';

function AddMinutesToDate(date, minutes) {
    return new Date(date.getTime() + minutes+60000);
  }

const sendOTP=async (req,res)=>{

    const {country,phone}=req.body;

    if(!phone){
        const response={"success":false,"Details":"Phone Number not provided"}
        return res.status(400).send(response) 
      }
    
    const otp=otpGenerator.generate(6,{lowerCaseAlphabets:false,specialChars:false,upperCaseAlphabets:false});

    const now=new Date();
    const expriration_time=AddMinutesToDate(now,5);

    OTP.deleteMany({'phone':phone}).then(function(){})
    .catch(function(err){
        console.log(err);
    });

    try {
        
        const OTPData=new OTP({
            country:country,
            phone:phone,
            otp:otp,
            expriration_time:expriration_time
        })

        const result=await OTPData.save()
        console.log(result);

    } catch (error) {
        console.log(error)
        res.send(error)
    }

    const data={
        "success": true,
        "message": "otp sent successfully",
        "data": {
            "otp": otp
        }
     }


    res.send(data)
}


const verifyOTP=(req,res)=>{

    const body=req.body;

    console.log(body);

    OTP.find({"phone":body.phone},function(err,docs){
        console.log(docs[0]);
        if(docs[0]==null){
            return res.send({error:"Phone is not valid"});
        }

        

        if(docs[0]['otp']==body.otp){
            OTP.deleteMany({'phone':body.phone}).then(function(){
                console.log("Delete Successfully");
            }).catch(function(err){
                console.log(err);
            })
            if(docs[0].expriration_time.getTime() < new Date().getTime()){
                return res.send("OTP Expired")
            }
        
            const data={
                "success": true,
                "message": "otp verify successfully",
                "data":{
                    "country":body.country,
                    "phone":body.phone,
                }
             }

            return res.send(data)
            
        }

        const data={
            "success": false,
            "message": "otp not verify",
         }
        
        res.send(data)
    })


}

export {sendOTP,verifyOTP}