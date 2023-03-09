import mongoose from "../mongooes.connection.js";


const plantSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    sciName:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    intro:{
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
    dieases:{
        type:String,
        require:true,
    },
    growth:{
        type:String,
    }
    

},

{
    timestamps:true,
}
)

const Plant=new mongoose.model("Plant",plantSchema)

export default Plant