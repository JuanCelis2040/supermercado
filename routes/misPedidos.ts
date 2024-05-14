import express from 'express'; 
import misPedidosController from '../controllers/misPedidosController';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.get('/', validateToken, misPedidosController);

export default router;