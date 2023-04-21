import mongoose from "../../mongooes.connection.js";


const shopSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    contact:{
        type:String,
        require:true,
    },
    location:{
        type:String,
        require:true,
    },

},

{
    timestamps:true,
}
)

const Shop=new mongoose.model("Shop",shopSchema)

export default Shop