import connectDB from "../../middleware/mongoose"
import Product from "../../modals/Product"
import User from "../../modals/User"


const handler=async(req,res)=>{
    if(req.method=='POST'){
        let user=await User.findOne({'email' : req.body.email})
         if(!user){
            res.status(400).json({"error" : "No Such User"})
         }
        if(req.body.email== user.email && req.body.password== user.password){
            res.status(200).json({'success': 'successfully Logged in',user : user})
        }
        else{
            res.status(400).json({error:"please Enter The Correct Email and Password"})
        }
    }
  
}
export default connectDB(handler)
   