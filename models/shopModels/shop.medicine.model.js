import mongoose from "../../mongooes.connection.js";


const shopMedicineSchema=new mongoose.Schema({
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

const ShopMedicine=new mongoose.model("ShopMedicine",shopMedicineSchema)

export default ShopMedicine