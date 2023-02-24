import User from "../models/user.model.js";

const emailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const createUser=async (req,res)=>{

    const body=req.body;

    // console.log(body);

    // const dateRegx=new RegExp("^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$");

    // console.log(emailValidation.test(body.email));

    User.find({phone:body.phone},async function (error,docs){
        if(docs[0]!=null){
            return res.send("User already exists.")
        }else{
            if(emailValidation.test(body.email)){
        
                    try{
                        const userData=new User({
                            country:body.country,
                            phone:body.phone,
                            name:body.name,
                            email:body.email,
                        })   
                
                        console.log(body);
                        const result= await userData.save();
                
                        res.send(result)
                    }catch(err){
                        console.log(err)
                        res.send(err)
                    }
            
            }else{
                res.send("Invalid Format")
            }
        }
    })

}

export {createUser}