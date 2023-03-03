import mongoose from "../mongooes.connection.js";


const weblinkSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    url:{
        type:String,
        require:true,
    },

},

{
    timestamps:true,
}
)

const WebLink=new mongoose.model("WebLink",weblinkSchema)

export default WebLink