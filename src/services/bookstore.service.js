import books from '../models/book.model.js';

//get all books of  single user
export const getAllbook = async (body) => {
  const data = await books.find()
  return data
};


//get single book
export const getbook = async (_id, body) => {
  const data = await books.findOne({ _id: _id });
  if (data != null) {
    return data;
  } else {
    throw new Error("Invalid Object_id")
  }
};