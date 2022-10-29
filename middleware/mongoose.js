import mongoose, { mongo } from "mongoose";

const connectDB=handler=>async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect("mongodb://localhost:27017/varietystore/")
    return handler(req,res)
}

export default connectDB