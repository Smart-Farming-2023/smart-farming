import User from "../models/user.model.js";

const emailValidation=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const createUser=async (req,res)=>{

    const body=req.body;

    User.find({phone:body.phone},async function (error,docs){
        if(docs[0]!=null){
            return res.send({
                "success": false,
                "message": "User already exist.",
             })
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
                
                        const data={
                            "success": true,
                            "message": "User create successfully",
                            "data": result
                         }

                        res.send(data)
                    }catch(err){
                        console.log(err)
                        res.send({
                            "success": false,
                            "message": "Something went to wrong.",
                            "err":err
                         })
                    }
            
            }else{
                res.send({
                    "success": false,
                    "message": "Email is not valid.",
                 })
            }
        }
    })

}

const isUserExists=async (req,res)=>{

    const body=req.body;

    User.find({phone:body.phone},async function (error,docs){
        if(docs[0]!=null){
            return res.send({
                "success": true,
                "message": "User is exist.",
                "user":docs[0]
             })
        }else{
            return res.send({
                "success": false,
                "message": "User not exist.",
             })
        }
    })
}

export {createUser,isUserExists}