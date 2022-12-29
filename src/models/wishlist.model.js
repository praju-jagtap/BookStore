/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema(
    {
        userID: {
            type: String
        },
        books: [{
            productId: {
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
        }]
    }
)

export default model('Wishlist', wishlistSchema);