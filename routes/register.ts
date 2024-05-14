import express from 'express';
import { register } from 'module';
import registerController from '../controllers/registerController'
const router = express.Router();

router.post('/', registerController);

export default router