import mongoose from "../mongooes.connection.js";


const medicineSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    intro:{
        type:String,
        require:true,
    },
    use:{
        type:String,
        require:true,
    },
    tech:{
        type:String,
        require:true,
    },
    other:{
        type:String,
    }
},

{
    timestamps:true,
}
)

const Medicine=new mongoose.model("Medicine",medicineSchema)

export default Medicine