import {Request, Response} from 'express'
import Pedido from '../Dto/PedidoDto'
import UserService from '../services/UserService'

let pedido = async (req:Request, res: Response)=>{
    try{
        const {
            idProducto,
            direccion,
            nombre,
            email,
        } = req.body
         
        let estado = ''
        const result: any = await UserService.crearPedido(new Pedido(idProducto, direccion, nombre, email, estado));
        console.log(result);
        
        if(result.encontrado){
            return res.status(201).json({
                status: 'pedido realizado'
            })
        }
        return res.status(401).json({
            status: 'Pedido fallido'
        })

    }catch(error: any){
        return res.status(401).json({
            status: 'no ha ingresado datos'
        })
    }
}

export default pedido;