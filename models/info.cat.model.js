import mongoose from "../mongooes.connection.js";


const infoCatSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
},

{
    timestamps:true,
}
)

const InfoCat=new mongoose.model("InfoCat",infoCatSchema)

export default InfoCat