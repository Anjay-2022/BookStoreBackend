import books from '../models/book.model.js';

//get all books of  single user
export const getAllbook = async (query, body) => {
  const { search, sort, order, } = query
  const sortObj = { [sort]: order == "asc" ? 1 : -1 }
  let page = Number(query.page) || 1
  let limit = Number(query.limit) || 5
  let skip = (page-1)*limit

  const data = await books.find(
    {
      $or: [
        { bookName: { $regex: '.*' + search + '.*' } },
        { description: { $regex: '.*' + search + '.*' } },
        { author: { $regex: '.*' + search + '.*' } }
      ]
    }).sort(sortObj).skip(skip).limit(limit)
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