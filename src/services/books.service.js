/* eslint-disable prettier/prettier */
import Books from '../models/books.model';

//get all books
export const getAllBooks = async () => {
    const data = await Books.find();
    return data;
};