import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as customerDetailsController from '../controllers/customerDetails.controller.js';


const router = express.Router();

//route to get all customerDetailss of Single user
router.post('/', userAuth,customerDetailsController.addAddress);

//update address
router.put('/:_id', userAuth,customerDetailsController.updateAddress);

//route to get a single customerDetails by their customerDetails id
router.delete('/:_id', userAuth, customerDetailsController.deleteAddress);

export default router;