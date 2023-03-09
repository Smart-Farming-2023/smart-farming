import mongoose from "../mongooes.connection.js";


const landSchema=new mongoose.Schema({
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
    quailty:{
        type:String,
    },

},

{
    timestamps:true,
}
)

const Land=new mongoose.model("Land",landSchema)

export default Land