import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookstoreRoute from './bookstore.route'
import cart from './cart.route';
import wishList from './whishList.route';
import customerDetails from './customerDetails.route.js';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/bookstore', bookstoreRoute);
  router.use('/cart', cart);
  router.use('/wishList', wishList);
  router.use('/customerDetails', customerDetails);
  return router;
};

export default routes;
