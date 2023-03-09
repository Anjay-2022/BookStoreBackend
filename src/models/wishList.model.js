import { Schema, model } from 'mongoose';

const wishListSchema = new Schema(
    {
        email: {
            type: String
        },
        books: [{
            productID: {
                type: String
            },
            description: {
                type: String
            },
            bookName: {
                type: String
            },
            bookImage: {
                type: String
            },
            author: {
                type: String
            },
            price: {
                type: Number
            }
        }],
    }
)

export default model('WishList', wishListSchema);