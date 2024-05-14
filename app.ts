import express from "express"
import bodyParser from "body-parser"
import register from "./controllers/registerController";
import auth from "./controllers/authController";
import verCatalogo from "./routes/verCatalogo";
import hacerPedido from "./routes/hacerPedido";
import misPedidos from "./routes/misPedidos";
import actualizarPedido from "./routes/actualizarPedido";
import consultarPedido from "./routes/consultarPedido";


const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/verCatalogo', verCatalogo);
app.use('/hacerPedido', hacerPedido);
app.use('/misPedidos', misPedidos);
app.use('/actualizarPedido', actualizarPedido);
app.use('/consultarPedido', consultarPedido);



const PORT = process.env.PORT || 10101;

app.listen(PORT, () =>{
    console.log("Servidor ejecutandose en el puerto: ", PORT)
}).on("error", (error) =>{
    throw new Error(error.message);
})