import govScheme from "../models/gov.scheme.model.js";


const creategovScheme=async (req,res)=>{

    const body=req.body;

    try{
        const govSchemeData=new govScheme({
            image:body.image,
            name:body.name,
            from:body.from,
            detail:body.detail,
        })   

        const result= await govSchemeData.save();

        res.send(result)
    }catch(err){
        console.log(err)
        res.send(err)
    }

}

// const updateShop=async (req,res)=>{

//     const body=req.body;

//     Shop.find({'_id':req.params.id},function(err,docs){
//         if(err===null){

//             if(docs[0]==null){
//                 return res.send("InfoCat not available")
//             }

//             const image = body.image ? body.image : docs[0]['image'];
//             const name = body.name ? body.name : docs[0]['name'];

//             InfoCat.updateOne({"_id":req.params.id},{"image":image,"name":name,"updatedAt":Date.now()},function(err,doc){
//                 console.log("Update");
//                 return res.send(doc)
//             })
//             return true;
            
//         }

//         console.log("err");
//         res.send(err)
//     })
// }


const getAllGovScheme =async (req,res)=>{
    govScheme.find(function(err,docs){
        if(docs[0]==null){
            return res.send("GovScheme not available")
        }

        res.send(docs)
    })
}

// const deleteShop=(req,res)=>{
//     Shop.deleteOne({'_id':req.params.id},function(){
//         res.send("Info deleted")
//     })
// }

export {creategovScheme,getAllGovScheme}