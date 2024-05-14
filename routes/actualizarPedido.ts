import express from 'express';
import actualizarPedidoController from '../controllers/actualizarPedido';
import validateToken from '../middleware/validateToken';

const router = express.Router();

router.put('/', validateToken, actualizarPedidoController);

export default router;