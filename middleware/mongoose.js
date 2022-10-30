import mongoose, { mongo } from "mongoose";

const connectDB=handler=>async (req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect("mongodb://localhost:27017/varietystore",{ useNewUrlParser: true,
    useUnifiedTopology: true})
    return handler(req,res)
}

export default connectDB