import { Schema, model } from 'mongoose';

const cartSchema = new Schema(
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
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number
            }
        }],
        cartTotal: {
            type: Number
        },
        isPurchased: {
            type: Boolean,
            default: false
        }
    }
)

export default model('Cart', cartSchema);