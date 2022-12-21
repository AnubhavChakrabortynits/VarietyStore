import connectDB from "../../middleware/mongoose"
import Product from "../../modals/Product"
import User from "../../modals/User"
var CryptoJS = require("crypto-js");

const handler=async(req,res)=>{
    if(req.method=='POST'){
     
        try{
            let user=new User({name: req.body.name,email: req.body.email,password: CryptoJS.AES.encrypt(req.body.password,'secret key 123').toString()})
            await user.save()
        }
        catch(e){
            res.status(400).json({error: e})
        }
      

      
      res.status(200).json({success:"yayyy"})
    }
    else{
        res.status(400).json({error:"this method is not defined"})
    }
  
}
export default connectDB(handler)
   