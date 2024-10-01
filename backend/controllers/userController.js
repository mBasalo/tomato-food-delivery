import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

// -------------------- LOGIN USER ------------------------------

export const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message: "User doesn't exist"})
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.json({success: false, message: "Invalid credentials"})
        }

        const token = createToken(user._id);
        res.json({success: true, token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
        
    }
};

export const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
};

// -------------------- REGISTER USER -------------------------

export const registerUser = async (req, res) => {
    const { name, password, email } = req.body;

    try {
        // ------------ Verificar si el usuario ya existe
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }

        // Validar formato de email y contraseña fuerte
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 8) {
            // Lanzar un error explícito para contraseñas débiles
            throw new Error("Please enter a strong password");
        }

        // Hashing de la contraseña del usuario
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token });

    } catch (error) {
        // Loguear el mensaje del error para análisis
        console.log("Error Message: ", error.message);

        // Devolver el mensaje del error si es conocido, de lo contrario, devolver un mensaje genérico
        const errorMessage = error.message || "An unexpected error occurred";
        res.json({ success: false, message: errorMessage });
    }
};
