import connectDB from "../../middleware/mongoose"
import Order from "../../modals/Order"



const handler=async(req,res)=>{
    if(req.method=='POST'){
        let order=new Order({email:req.body.email,orderId:req.body.oid,address:req.body.address,amount:req.body.subtotal,products:req.body.cart,status:'paid'})
        await order.save()
      res.status(200).json({success:'true',order:order})
    }
    else{
        res.status(400).json({error:"Some error occured try agin"})
    }
  
}

export default connectDB(handler)