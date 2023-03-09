import wishListdb from '../models/wishList.model.js';
import Booksdb from '../models/book.model.js';

//Add a book to wishList
export const addBooktowishList = async (id, body) => {
    const data = await Booksdb.findOne({ _id: id })
    console.log("----data-----",data.author)
    let bookdetails = {
        "productID": data._id,
        "description": data.description,
        "bookName": data.bookName,
        "author": data.author,
        "price": data.price
    }
    console.log("-----book details---", bookdetails)
    if (data != null) {
        const book = []
        const wishList = await wishListdb.findOne({ email: body.email })
        if (wishList == null) {
            book.push(bookdetails)
            body.books = book
            const createwishList = await wishListdb.create({
                email: body.email,
                wishListTotal: data.price,
                books: body.books
            })
            return createwishList
        } else {
            const bookExist = await wishList.books.find((value) => value.productID == id)
            //console.log("----books exist in wishList or not---", bookExist)
            if (bookExist == null) {
                wishList.books.push(bookdetails)
                await wishList.save()
                return wishList
            } else
                throw new Error("Book already is in Wishlist ")
        }
    } else
        throw new Error("Book does not exists in inventory add first ")

};


//Remove a book from wishList
export const removeBookfromwishList = async (id, body) => {
    const wishList = await wishListdb.findOne({ email: body.email })
    if (wishList !== null) {
        const bookExist = await wishList.books.find((value) => value.productID == id)
        //console.log("-------bookexits quantity check in removebook--------",bookExist)
        if (bookExist != null) {
            const removeBook = await wishList.books.splice(wishList.books.findIndex(a => a.productID == id), 1)
            wishList.save()
            return wishList
        } else {
            throw new Error("Book does't not exists in wishList")
        }
    } else {
        throw new Error("wishList of user not exists")
    }
}
