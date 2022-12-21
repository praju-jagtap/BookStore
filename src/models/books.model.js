/* eslint-disable prettier/prettier */
import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
    {
        description: { type: String },
        discountPrice: { type: Number },
        bookImage: { type: String },
        admin_user_id: { type: String },
        bookName: { type: Boolean },
        author: { type: Number },
        quantity: { type: Number },
        price: { type: Number }
    },
    {
        timestamps: true
    }
);
export default model('books', bookSchema);