import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishListController from '../controllers/wishList.controller'

const router = express.Router();

router.post('/add/:_id', userAuth, wishListController.addBooktowishList);
router.post('/remove/:_id', userAuth, wishListController.removeBookfromwishList);

export default router;