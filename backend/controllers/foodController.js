import fs from 'fs';
import foodModel from '../models/foodModel.js';

//add food item 
//succesfully working

const addFood = async (req, res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })

    try {
        await food.save();
        res.json({success: true, message: "Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}

//----------------------------------------------------------------------------

// all food list

const listFood = async(req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success: true, data:foods})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
        
    }
}

// remove food item

const removeFood = async(req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);

        //la siguiente linea borra la imagen de la carpeta uploads
        fs.unlink(`uploads/${food.image}`, () =>{})

        // esta la borra de la base de datos

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message: "Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false, messagge: "Error"})
        
    }
}



export{addFood, listFood, removeFood}

