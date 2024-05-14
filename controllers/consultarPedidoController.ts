import {Request, Response} from 'express'
import UserService from '../services/UserService'

let pedido = async (req:Request, res: Response)=>{
    try{
        const {
            idPedido,
        } = req.body

        const result: any = await UserService.verificarEstadoPedido(idPedido);
        console.log(result);
        
        if(result[0].length>0){
            return res.status(201).json({
                status: 'Producto obtenido', estado: result
            })
        }
        return res.status(401).json({
            status: 'pedido no encontrado'
        })
        
    }catch(error: any){
        return res.status(401).json({
            status: 'no ha ingresado datos'
        })
    }
}

export default pedido;