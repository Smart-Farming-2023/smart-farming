import ShopTools from "../../models/shopModels/shop.tools.model.js";

const createShopTools=async (req,res)=>{

    const body=req.body;

    try{
        const shopToolsData=new ShopTools({
            image:body.image,
            name:body.name,
            price:body.price,
            use:body.use,
        })   

        console.log(body);
        const result= await shopToolsData.save();

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


const getAllShopTools =async (req,res)=>{
    ShopTools.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Shop Tools not available")
        }

        res.send(docs)
    })
}

// const deleteShop=(req,res)=>{
//     Shop.deleteOne({'_id':req.params.id},function(){
//         res.send("Info deleted")
//     })
// }

export {createShopTools,getAllShopTools}