import HttpStatus from 'http-status-codes';
import * as bookstoreService from '../services/bookstore.service';

export const getAllbook = async (req, res, next) => {
  try {
    const data = await bookstoreService.getAllbook(req.query,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All books fetched successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};
//single bookstore of any user
export const getbook = async (req, res, next) => {
    try {
      const data = await bookstoreService.getbook(req.params._id,req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Book fetched successfully'
      });
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: `${error}`
      })
      next(error);
    }
  };