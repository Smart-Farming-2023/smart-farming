import mongoose from "../mongooes.connection.js";


const contactSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    subtitle:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true,
    },
    contact:{
        type:String,
        require:true,
    },
},

{
    timestamps:true,
}
)

const Contact=new mongoose.model("Contact",contactSchema)

export default Contact