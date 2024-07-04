import express from 'express';
import { retrieveAllRes, retrieveById } from '../controllers/restaurant.js';

const router = express.Router();

router.get('/data/all',retrieveAllRes)
router.get('/data/:resId',retrieveById)

export default router;