import Auth from "../Dto/AuthDto";
import { productos } from "../Dto/CatalogoDto";
import Pedido from "../Dto/PedidoDto";
import User from "../Dto/UserDto";
import generateHash from "../helpers/generateHash";
import UserRepository from "../repositories/UserRepository";
const bcrypt = require("bcryptjs");

class UserService {
    static async register(user: User){
        user.password = await generateHash(user.password);
        return await UserRepository.add(user);
        
    }
    static async auth(auth: Auth){
        const result: any = await UserRepository.login(auth);
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
            if(isPasswordValid){
                return {logged: true, status: "Succesful Authentication"}
                }
                return{logged: false, status: "Incorrect username or password"}
            }   
            return{logged: false, status: "Incorrect username or password"}
    }

    static async crearPedido(pedido: Pedido){
        const encontrarProducto = productos.find(producto=> producto.id === pedido.idProducto);
        if(encontrarProducto){
            const nuevoPedido = await UserRepository.addPedido(pedido);
            if(nuevoPedido){
                return{
                    encontrado: true, status: 'producto encontrado'
                }
            }
        }else{
            return{
                encontrado: false, status: 'producto no encontrado'
            }
        }
    }

    static async verPedidos(email:string){
        return await UserRepository.verPedidos(email);
    }

    static async actualizar(id:number,estado:string){
        const result : any = await UserRepository.verificar(id);
        
        if (result[0].length > 0) {
            const update : any = await UserRepository.update(estado,id);
            
            return{
                encontrado: true, status: 'su pedido si esta'
            }
        }else{
            return{
                encontrado: false, status: 'su pedido no esta'
            }
        }
    }

    static async verificarEstadoPedido(idPedido: number){
        return await UserRepository.verEstado(idPedido);
    }
}

export default UserService;