import InfoCat from "../models/info.cat.model.js";

const createInfo=async (req,res)=>{

    const body=req.body;

    try{
        const infoData=new InfoCat({
            image:body.image,
            name:body.name,
        })   

        console.log(body);
        const result= await infoData.save();

        res.send(result)
    }catch(err){
        console.log(err)
        res.send(err)
    }

}

const updateInfo=async (req,res)=>{

    const body=req.body;

    InfoCat.find({'_id':req.params.id},function(err,docs){
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


const getAllInfo =async (req,res)=>{
    InfoCat.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Info not available")
        }

        res.send(docs)
    })
}

const deleteInfo=(req,res)=>{
    InfoCat.deleteOne({'_id':req.params.id},function(){
        res.send("Info deleted")
    })
}

export {createInfo,updateInfo,getAllInfo,deleteInfo}