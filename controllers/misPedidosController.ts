import {Request, Response} from 'express'
import UserService from '../services/UserService';


let misPedidos = async(req:Request,res:Response)=>{
    try{
        const emailUser = req.query.email as string;
        const getMisPedidos = await UserService.verPedidos(emailUser);
        return res.status(200).json(
            {status: 'Obtenido correctamente', email: emailUser, pedidos: getMisPedidos}
        );
    } catch (error: any) {
        console.error("Error al ejecutar la consulta:", error);
        return res.status(500).json({
            error: "Error al obtener usuarios"
        });
    }
    }

export default misPedidos