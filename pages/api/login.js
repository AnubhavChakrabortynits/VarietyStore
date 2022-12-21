import connectDB from "../../middleware/mongoose"
import Product from "../../modals/Product"
import User from "../../modals/User"
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');



const handler=async(req,res)=>{
    if(req.method=='POST'){
        let user=await User.findOne({'email' : req.body.email})
         if(!user){
            res.status(400).json({"error" : "No Such User"})
         }
        if(req.body.email== user.email && req.body.password==  CryptoJS.AES.decrypt(user.password,'secret key 123').toString(CryptoJS.enc.Utf8)){
            var token = jwt.sign({user : user}, 'sssss', {expiresIn : '2d'});
            console.log(token)
            res.status(200).json({'success': 'successfully Logged in',token : token})
            
        }
        else{
            res.status(400).json({error:"please Enter The Correct Email and Password"})
        }
    }
  
}
export default connectDB(handler)
   