import mongoose from "mongoose"
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://Bhanurathore:8894720636@cluster0.q7b9f.mongodb.net/tomatofood").then(()=>console.log("DB Connected"))
}
