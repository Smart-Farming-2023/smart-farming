import Shop from "../../models/shopModels/shop.model.js";

const createShop=async (req,res)=>{

    const body=req.body;

    try{
        const shopData=new Shop({
            image:body.image,
            name:body.name,
            contact:body.contact,
            location:body.location,
        })   

        const result= await shopData.save();

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


const getAllShop =async (req,res)=>{
    Shop.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Shop not available")
        }

        res.send(docs)
    })
}

// const deleteShop=(req,res)=>{
//     Shop.deleteOne({'_id':req.params.id},function(){
//         res.send("Info deleted")
//     })
// }

export {createShop,getAllShop}