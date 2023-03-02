import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import bookstoreRoute from './bookstore.route'
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

  return router;
};

export default routes;
