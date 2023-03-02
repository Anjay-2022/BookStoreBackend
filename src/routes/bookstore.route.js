import express from 'express';
import * as bookstoreController from '../controllers/bookstore.controller';


const router = express.Router();

//route to get all bookstores of Single user
router.get('/All',bookstoreController.getAllbook);

//route to get a single bookstore by their bookstore id
router.get('/:_id', bookstoreController.getbook);

export default router;
