import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

export const addBooktocart = async (req, res, next) => {
  try {
    const data = await cartService.addBooktocart(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book added to cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};

export const removeBookfromcart = async (req, res, next) => {
  try {
    const data = await cartService.removeBookfromcart(req.params._id, req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Book removed from cart successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};

export const purchasecart = async (req, res, next) => {
  try {
    const data = await cartService.purchasecart(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Cart is marked purchased successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};