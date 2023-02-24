import mongoose from "../mongooes.connection.js";


const userSchema=new mongoose.Schema({
    country:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
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

const User=new mongoose.model("User",userSchema)

export default User