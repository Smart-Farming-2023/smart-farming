import mongoose from "../mongooes.connection.js"

const govSchemeSchema=new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    from:{
        type:String,
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

const govScheme=new mongoose.model("GovScheme",govSchemeSchema)

export default govScheme