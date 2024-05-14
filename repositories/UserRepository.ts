import db from '../config/config-db'
import Auth from "../Dto/AuthDto";
import Pedido from "../Dto/PedidoDto";
import User from "../Dto/UserDto";

class UserRepository{
    static async add(user:User){
        const sql = 'INSERT INTO users(email, nombres, password) VALUES (?,?,?)';
        const values = [user.email,user.nombres, user.password];
        return db.execute(sql, values);
    }
    
    static async login(auth: Auth){
        const sql = 'SELECT password FROM users WHERE email=?';
        const values = [auth.email];
        return db.execute(sql, values);
        }

    static async addPedido(pedido: Pedido){
        const sql = 'INSERT INTO pedido(idProducto, direccion, nombreUsuario, emailUsuario) VALUES (?,?,?,?)';
        const values = [pedido.idProducto,pedido.direccion,pedido.nombreUsuario,pedido.email];
        return db.execute(sql, values);
        }

    static async verPedidos(email: string){
        const sql = 'SELECT * FROM pedido WHERE emailUsuario =?'
        const values = [email];
        return db.execute(sql, values);
    }
        
    static async verificar(id:number){
        const sql = 'SELECT * FROM pedido WHERE idPedido =?'
        const values = [id];
        return db.execute(sql, values);
    }

    static async update(estado:string, id:number){
        const sql = 'UPDATE pedido SET estado = ? WHERE idPedido =?'
        const values = [estado,id];
        return db.execute(sql, values);
    }

    static async verEstado(idPedido:number){
        const sql = 'SELECT estado FROM pedido WHERE idPedido = ?'
        const values = [idPedido];
        return db.execute(sql, values);
    }
}

export default UserRepository;