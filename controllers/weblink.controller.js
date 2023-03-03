import WebLink from "../models/weblink.model.js";

const createWebLink=async (req,res)=>{

    const body=req.body;

    try{
        const weblinkData=new WebLink({
            image:body.image,
            name:body.name,
            url:body.url,
        })   

        console.log(body);
        const result= await weblinkData.save();

        res.send(result)
    }catch(err){
        console.log(err)
        res.send(err)
    }

}

const updateWebLink=async (req,res)=>{

    const body=req.body;

    WebLink.find({'_id':req.params.id},function(err,docs){
        if(err===null){

            if(docs[0]==null){
                return res.send("WebLink not available")
            }

            const image = body.image ? body.image : docs[0]['image'];
            const name = body.name ? body.name : docs[0]['name'];
            const url = body.url ? body.url : docs[0]['url'];

            WebLink.updateOne({"_id":req.params.id},{"image":image,"name":name,"url":url,"updatedAt":Date.now()},function(err,doc){
                console.log("Update");
                return res.send(doc)
            })
            return true;
            
        }

        console.log("err");
        res.send(err)
    })
}


const getAllWebLink =async (req,res)=>{
    WebLink.find(function(err,docs){
        if(docs[0]==null){
            return res.send("WebLink not available")
        }

        res.send(docs)
    })
}

const deleteWebLink=(req,res)=>{
    WebLink.deleteOne({'_id':req.params.id},function(){
        res.send("WebLink deleted")
    })
}

export {createWebLink,updateWebLink,getAllWebLink,deleteWebLink}