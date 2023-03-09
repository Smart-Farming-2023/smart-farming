import Plant from "../models/plant.model.js";

const createPlant=async (req,res)=>{

    const body=req.body;

    try{
        const plantData=new Plant({
            image:body.image,
            name:body.name,
            sciName:body.sciName,
            category:body.category,
            intro:body.intro,
            type:body.type,
            use:body.use,
            dieases:body.dieases,
        })   

        console.log(body);
        const result= await plantData.save();

        res.send(result)
    }catch(err){
        console.log(err)
        res.send(err)
    }

}

const updateplant=async (req,res)=>{

    const body=req.body;

    Plant.find({'_id':req.params.id},function(err,docs){
        if(err===null){

            if(docs[0]==null){
                return res.send("InfoCat not available")
            }

            const image = body.image ? body.image : docs[0]['image'];
            const name = body.name ? body.name : docs[0]['name'];

            InfoCat.updateOne({"_id":req.params.id},{"image":image,"name":name,"updatedAt":Date.now()},function(err,doc){
                console.log("Update");
                return res.send(doc)
            })
            return true;
            
        }

        console.log("err");
        res.send(err)
    })
}


const getAllPlant =async (req,res)=>{
    Plant.find(function(err,docs){
        if(docs[0]==null){
            return res.send("PLant not available")
        }

        res.send(docs)
    })
}

const deleteInfo=(req,res)=>{
    InfoCat.deleteOne({'_id':req.params.id},function(){
        res.send("Info deleted")
    })
}

export {createPlant,getAllPlant}