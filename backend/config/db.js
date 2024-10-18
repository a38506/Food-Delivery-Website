import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://root:root@vietyy.fnlf8.mongodb.net/food-delivery')
    .then(()=>console.log("DB Connected"));
}