import mongoose from "../../mongooes.connection.js";


const shopToolsSchema=new mongoose.Schema({
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
    use:{
        type:String,
        require:true,
    },

},

{
    timestamps:true,
}
)

const ShopTools=new mongoose.model("ShopTools",shopToolsSchema)

export default ShopTools