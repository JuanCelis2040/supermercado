import User from '../Dto/UserDto';
import { Request, Response } from 'express';
import UserService from '../services/UserService';


let register = async(req: Request, res: Response) =>{
    try{
        const{
            email,
            password,
            name,
        } = req.body;

const registerUser = await UserService.register(new User(email, name, password));
return res.status(201).send(
    {status: 'Registrado con exito'}
);
    }catch(error: any){
        if(error && error.code == 'ER_DUP_ENTRY'){
            return res.status(500).send({errorInfo: error.sqlMessage}
            );
        }
    }
}

export default register