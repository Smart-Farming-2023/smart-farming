import Contact from "../models/contact.model.js";
import InfoCat from "../models/info.cat.model.js";
import ShopMedicine from "../models/shopModels/shop.medicine.model.js";
import Shop from "../models/shopModels/shop.model.js";
import ShopPlant from "../models/shopModels/shop.plant.model.js";
import ShopTools from "../models/shopModels/shop.tools.model.js";
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
                            }).select('-createdAt -updatedAt -__v')
                        }
                    }).select('-createdAt -updatedAt -__v')
                }
            }).select('-createdAt -updatedAt -__v')
        }
    });

}

const getShop=async (req,res)=>{

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
            Shop.find(function(err,shop){
                if(shop[0]==null){
                    return res.send({
                        "success": false,
                        "message": "Shop is Empty.",})
                }else{
                    ShopMedicine.find({},async function(err,shopMedicine){
                        if(shopMedicine[0]==null){
                            return res.send({
                                "success": false,
                                "message": "shopMedicine is Empty.",})
                        }else{
                            ShopTools.find({},async function(err,shopTools){
                                if(shopTools[0]==null){
                                    return res.send({
                                        "success": false,
                                        "message": "ShopTools is Empty.",})
                                }else{

                                    ShopPlant.find({},async function(err,shopPlant){
                                        if(shopPlant[0]==null){
                                            return res.send({
                                                "success": false,
                                                "message": "ShopPlant is Empty.",})
                                        }else{
                                            const data={
                                                "User":user,
                                                "Shop":shop,
                                                "ShopPlant":shopPlant,
                                                "ShopMedicine":shopMedicine,
                                                "ShopTools":shopTools
                                            }
                                            return res.send(
                                                {
                                                    "success": true,
                                                    "data":data
                                                }
                                            )
                                        }
                                    }).limit(8).select('-createdAt -updatedAt -__v')
                                    
                                }
                            }).limit(8).select('-createdAt -updatedAt -__v')
                        }
                    }).limit(8).select('-createdAt -updatedAt -__v')
                }
            }).limit(5).select('-createdAt -updatedAt -__v')
        }
    });
}


export {getHome,getShop}