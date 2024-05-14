import express from 'express'; 
import consultarPedidoController from '../controllers/consultarPedidoController';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.get('/', validateToken, consultarPedidoController);

export default router;