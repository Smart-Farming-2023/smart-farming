import Contact from "../models/contact.model.js";
import InfoCat from "../models/info.cat.model.js";
import User from "../models/user.model.js";
import WebLink from "../models/weblink.model.js";

const getHome=async (req,res)=>{

    const body=req.body;

    User.find({phone:body.phone},"name",async function(err,user){

        if(err){
            return res.send({
                "success": false,
                "message": err,})
        }else if(user[0]==null){
            return res.send({
                "success": false,
                "message": "User not valid",})
        }else{
            InfoCat.find(function(err,info){
                console.log(info)
                if(info[0]==null){
                    return res.send({
                        "success": false,
                        "message": "Info is Empty.",})
                }else{
                    Contact.find({},async function(err,contact){
                        if(contact[0]==null){
                            return res.send({
                                "success": false,
                                "message": "Contact is Empty.",})
                        }else{
                            WebLink.find({},async function(err,weblink){
                                if(weblink[0]==null){
                                    return res.send({
                                        "success": false,
                                        "message": "Web is Empty.",})
                                }else{

                                    const data={
                                        "User":user,
                                        "Info":info,
                                        "Contact":contact,
                                        "WebLink":weblink
                                    }
                                    return res.send(
                                        {
                                            "success": true,
                                            "data":data
                                        }
                                    )
                                }
                            })
                        }
                    })
                }
            })
        }
    });

}

export {getHome}