/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable max-len */
import Books from '../models/books.model';
import Wishlist from '../models/wishlist.model';

//book added into wishlist
export const addBookIntoWishlist = async (body, _id) => {
    const data = await Books.findOne({ _id });
    console.log('book data--->', data);
    let newWishlistBook = true;

    if (data !== null) {
        const bookWishlistExist = await Wishlist.findOne({ userID: body.userID });
        let addNewBook = {
            'productId': data._id,
            'description': data.description,
            'bookName': data.bookName,
            'bookImage': data.bookImage,
            'author': data.author,
            'price': data.price
        };
        if (bookWishlistExist === null) {
            const createWishlist = await Wishlist.create({ userID: body.userID, books: addNewBook });
            return createWishlist;
        } else {
            bookWishlistExist.books.forEach(element => {
                if (element.productId === _id) {
                    newWishlistBook = false;
                }
            });
            if (newWishlistBook) {
                const updateWishlist = await Wishlist.findOneAndUpdate(
                    { _id: bookWishlistExist._id },
                    { $addToSet: { books: addNewBook } },
                    { new: true }
                );
                return updateWishlist;
            } else {
                throw new Error('Book is Already In Wishlist');
            }
        }
    } else {
        throw new Error('Book is Not Present');
    }
};

//remove from wishlist
export const removeBookFromWishlist = async (body, _id) => {
    const bookWishlistExist = await Wishlist.findOne({ userID: body.userID });
    console.log('wishlist Exist---->',bookWishlistExist);
    let bookExist = false;
    let removeBookDetails;

    if (bookWishlistExist !== null) {
        await bookWishlistExist.books.forEach(element => {
            if (element.productId === _id) {
                removeBookDetails = {
                    'productId': element.productId,
                    'description': element.description,
                    'bookName': element.bookName,
                    'bookImage': element.bookImage,
                    'author': element.author,
                    'price': element.price
                };
                bookExist = true;
            }
        });
        if (bookExist === true) {
            const updateMyWishlist = await Wishlist.findOneAndUpdate(
                { _id: bookWishlistExist._id },
                { $pull: { books: removeBookDetails } },
                { new: true }
            );
            return updateMyWishlist;
        } else {
            throw new Error('Book is Not Present in Your Wishlist');
        }
    } else {
        throw new Error('Wishlist Does Not Exist');
    }
};