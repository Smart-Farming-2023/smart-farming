import Contact from "../models/contact.model.js";

const createContact=async (req,res)=>{

    const body=req.body;

    try{
        const contactData=new Contact({
            title:body.title,
            subtitle:body.subtitle,
            desc:body.desc,
            contact:body.contact,
        })   

        console.log(body);
        const result= await contactData.save();

        res.send(result)
    }catch(err){
        console.log(err)
        res.send(err)
    }

}

const updateContact=async (req,res)=>{

    const body=req.body;

    Contact.find({'_id':req.params.id},function(err,docs){
        if(err===null){

            if(docs[0]==null){
                return res.send("Contact not available")
            }

            const title = body.title ? body.title : docs[0]['title'];
            const subtitle = body.subtitle ? body.subtitle : docs[0]['subtitle'];
            const desc = body.desc ? body.desc : docs[0]['desc'];
            const contact = body.contact ? body.contact : docs[0]['contact'];

            Contact.updateOne({"_id":req.params.id},{"title":title,"subtitle":subtitle,"desc":desc,"contact":contact,"updatedAt":Date.now()},function(err,doc){
                console.log("Update");
                return res.send(doc)
            })
            return true;
            
        }

        console.log("err");
        res.send(err)
    })
}


const getAllContact =async (req,res)=>{
    Contact.find(function(err,docs){
        if(docs[0]==null){
            return res.send("Contact not available")
        }

        res.send(docs)
    })
}

const deleteContact=(req,res)=>{
    Contact.deleteOne({'_id':req.params.id},function(){
        res.send("Contact deleted")
    })
}

export {createContact,updateContact,getAllContact,deleteContact}