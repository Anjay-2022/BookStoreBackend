import HttpStatus from 'http-status-codes';
import * as wishListService from '../services/wishList.service.js';

export const addBooktowishList = async (req, res, next) => {
  try {
    const data = await wishListService.addBooktowishList(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book added to wishList successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};
export const removeBookfromwishList = async (req, res, next) => {
  try {
    const data = await wishListService.removeBookfromwishList(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book removed from wishList successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};