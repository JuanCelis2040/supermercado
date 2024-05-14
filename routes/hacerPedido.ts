import express from 'express';
import hacerPedidoController from '../controllers/hacerPedidoController';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.post('/', validateToken, hacerPedidoController);

export default router;