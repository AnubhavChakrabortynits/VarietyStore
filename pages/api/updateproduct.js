import connectDB from "../../middleware/mongoose"
import Product from "../../modals/Product"

const handler=async(req,res)=>{
    if(req.method=='POST'){
        for(let i=0;i<req.body.length;i++){
            let p=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
            await p.save()
        }
      res.status(200).json({success:"success"})
    }
    else{
        res.status(400).json({error:"this method is not defined"})
    }
  
}
export default connectDB(handler)
   
