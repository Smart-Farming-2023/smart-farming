import Medicine from "../models/medicine.model.js";

const createMedicine=async (req,res)=>{

    const body=req.body;

    try{
        const medicineData=new Medicine({
            image:body.image,
            name:body.name,
            intro:body.intro,
            use:body.use,
            tech:body.tech
        })   

        console.log(body);
        const result= await medicineData.save();

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


const getAllMedicine =async (req,res)=>{
    Medicine.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Medicine not available")
        }

        res.send(docs)
    })
}

const deleteInfo=(req,res)=>{
    InfoCat.deleteOne({'_id':req.params.id},function(){
        res.send("Info deleted")
    })
}

export {createMedicine,getAllMedicine}