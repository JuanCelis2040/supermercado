import {Request, Response} from 'express'
import { productos } from '../Dto/CatalogoDto';

let verMenues = async(req:Request, res:Response)=>{
    res.json(productos);
}

export default verMenues