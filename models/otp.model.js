import mongoose from "../mongooes.connection.js";


const otpSchema=new mongoose.Schema({
    country:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    otp:{
        type:Number,
        require:true,
    },
    expriration_time:{
        type:Date,
        require:true,
    },
    // createdAt:{
    //     type:Date,
    //     default: Date()+0,
    //     required:true,
    // },
    // updatedAt:{
    //     type:Date,
    //     default: Date()+0,
    //     required:true,
    // },
},

{
    timestamps:true,
}
)

const OTP=new mongoose.model("OTP",otpSchema)

export default OTP