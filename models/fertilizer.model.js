import mongoose from "../mongooes.connection.js";


const fertilizerSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    type:{
        type:String,
        require:true,
    },
    use:{
        type:String,
        require:true,
    },
    advantages:{
        type:String,
        require:true,
    },
},

{
    timestamps:true,
}
)

const Fertilizer=new mongoose.model("Fertilizer",fertilizerSchema)

export default Fertilizer