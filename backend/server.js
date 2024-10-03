import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"

/*
express: Es un framework de Node.js que simplifica la creación de servidores web.

cors: Es un middleware para manejar las solicitudes de recursos cruzados (Cross-Origin Resource Sharing), 
lo que permite que tu servidor acepte peticiones de diferentes dominios.

connectDB: Es una función que importa desde el archivo db.js en la carpeta config, 
y se utiliza para conectar la aplicación a una base de datos (presumiblemente MongoDB).*/ 

// app config
/*app: Crea una instancia de la aplicación Express.
port: Define el puerto en el que el servidor escuchará 
las peticiones. En este caso, es el puerto 4000*/

const app = express()
const port = 4000 

//----------------------------------------------------------------------------------------

// middleware
/**app.use(express.json()): Configura el servidor para que 
 * pueda interpretar las solicitudes con cuerpo en formato JSON.
app.use(cors()): Habilita el manejo de CORS para permitir 
solicitudes desde diferentes dominios. */

app.use(express.json())
app.use(cors())

//----------------------------------------------------------------------------------------


// db connection
/**Llama a la función connectDB, que probablemente 
 * se encarga de establecer una conexión con la base de datos 
 * (probablemente MongoDB, dado el contexto). */

connectDB();

//----------------------------------------------------------------------------------------

//API enpoints

app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)


//----------------------------------------------------------------------------------------





app.get("/", (req, res) => {
    res.send("API Working")
})

/**Define una ruta para las solicitudes GET en la raíz ("/"). Cuando se accede a esta ruta, responde con el mensaje "API Working".
*/

app.listen(port,()=> {
    console.log(`Server Started on http://localhost:${port}`)
})

/**Configura el servidor para escuchar en el puerto definido y muestra un mensaje en la consola cuando el servidor ha comenzado a escuchar las solicitudes. */


//mongodb+srv://mBasalo:badmoon0406@cluster0.hewt8gw.mongodb.net/?