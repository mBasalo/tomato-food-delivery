import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required:true},
    description: {type: String, requiered:true},
    price: {type: Number, requiered: true},
    image: {type: String, requiered: true},
    category: {type: String, requiered: true}
})

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema)

export default foodModel;