import express from 'express';
import verCatalogoController from '../controllers/verCatalogoController';

const router = express.Router();

router.get('/', verCatalogoController);

export default router;