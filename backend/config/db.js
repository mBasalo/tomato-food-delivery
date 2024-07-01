import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mBasalo:badmoon0406@cluster0.hewt8gw.mongodb.net/tomato-food-delivery').then(() => console.log("DB Connected"))
}