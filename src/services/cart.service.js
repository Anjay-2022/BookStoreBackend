import Cartdb from '../models/cart.model';
import Booksdb from '../models/book.model.js';

//Add a book to cart
export const addBooktocart = async (id, body) => {

  const data = await Booksdb.findOne({ _id:id })

  let bookdetails = {
    "productID": data._id,
    "description": data.description,
    "bookName": data.bookName,
    "author": data.author,
    "price": data.price
  }
   if (data != null && data.quantity > 0) {
    
    //updating decreased quantity of book in data base of Booksdb
    await Booksdb.updateOne({ _id: id }, { $set: { quantity: data.quantity-1 } })

    const book = []
    const Cart = await Cartdb.findOne({ $and: [{ email: body.email }, { isPurchased : false }] });

    if (Cart == null) {
      book.push(bookdetails)
      body.books = book
      const createCart = await Cartdb.create({
        email: body.email,
        cartTotal: data.price,
        books: body.books
      })
      return createCart
    } else {
      const bookExist = await Cart.books.find((value) => value.productID == id)

      if (bookExist == null) {  
        Cart.books.push(bookdetails)
        Cart.cartTotal += data.price
        await Cart.save()
        return Cart
      } else {
        bookExist.quantity += 1
        Cart.cartTotal += bookExist.price
        await Cart.save()
        return Cart
      }

    }
  } else
    throw new Error("Book does not exists in inventory add first ")

};


//Remove a book from cart
export const removeBookfromcart = async (id, body) => {
  //this is used for updating increased quantity in Booksdb because we removed  one book from cart it should update in Booksdb 
  const data = await Booksdb.findOne({ _id:id })
  
  const Cart = await Cartdb.findOne({ $and: [{ email: body.email }, { isPurchased : false }] });
  if (Cart !== null) {
    const bookExist = await Cart.books.find((value) => value.productID == id)
    if (bookExist != null) {
   
      //updating quantity of book in data base of Booksdb
    await Booksdb.updateOne({ _id: id }, { $set: { quantity: data.quantity+1 } })
     
    
    if (bookExist.quantity > 1) {
        bookExist.quantity -= 1
        Cart.cartTotal -= bookExist.price
        await Cart.save()
        return Cart
      } else {
        Cart.cartTotal -= bookExist.price
        const removeBook = await Cart.books.splice(Cart.books.findIndex(a => a.productID == id), 1)
        Cart.save()
        return Cart
      }
    } else
      throw new Error("Book does't not exists in cart")
  } else
    throw new Error("Cart of user not exists")
}


export const purchasecart = async (id,body) => {

  const data = await Cartdb.findOne({ $and: [{ email: body.email }, { _id: id }] });
  if (data != null) {
    if (data.isPurchased == false) {
      const updatednote = await Cartdb.updateOne(
        { _id:id }, { $set: { isPurchased: true }, })
      return updatednote;
    }
  } else
    throw new Error("Invalid Object_id")
};
