import HttpStatus from 'http-status-codes';
import * as customerdetails from '../services/customerDetails.service.js';

export const addAddress = async (req, res, next) => {
  try {
    const data = await customerdetails.addAddress(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Address successfully Added'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};
export const updateAddress = async (req, res, next) => {
  try {
    const data = await customerdetails.updateAddress(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Address successfully updated'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};
export const deleteAddress = async (req, res, next) => {
  try {
    const data = await customerdetails.deleteAddress(req.params._id,req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Address successfully deleted'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    })
    next(error);
  }
};

