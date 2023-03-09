import mongoose from "../mongooes.connection.js";


const equipmentSchema=new mongoose.Schema({
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
},

{
    timestamps:true,
}
)

const Equipment=new mongoose.model("Equipment",equipmentSchema)

export default Equipment