import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as cartController from '../controllers/cart.controller'

const router = express.Router();

router.post('/add/:_id', userAuth, cartController.addBooktocart);
router.post('/remove/:_id', userAuth, cartController.removeBookfromcart);
router.post('/purchased/:_id', userAuth, cartController.purchasecart);

export default router;