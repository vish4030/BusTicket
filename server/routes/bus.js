import express from 'express';
import { retrieveBus } from '../controllers/bus.js';

const router = express.Router();

router.get('/findBus',retrieveBus)

export default router;