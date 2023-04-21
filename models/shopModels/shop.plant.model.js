import mongoose from "../../mongooes.connection.js";


const shopPlantSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    detail:{
        type:String,
        require:true,
    },

},

{
    timestamps:true,
}
)

const ShopPlant=new mongoose.model("ShopPlant",shopPlantSchema)

export default ShopPlant