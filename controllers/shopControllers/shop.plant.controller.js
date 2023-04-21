import ShopPlant from "../../models/shopModels/shop.plant.model.js";

const createShopPlant=async (req,res)=>{

    const body=req.body;

    try{
        const shopPlantData=new ShopPlant({
            image:body.image,
            name:body.name,
            price:body.price,
            detail:body.detail,
        })   

        console.log(body);
        const result= await shopPlantData.save();

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


const getAllShopPlant =async (req,res)=>{
    ShopPlant.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Shop Plants not available")
        }

        res.send(docs)
    })
}

// const deleteShop=(req,res)=>{
//     Shop.deleteOne({'_id':req.params.id},function(){
//         res.send("Info deleted")
//     })
// }

export {createShopPlant,getAllShopPlant}