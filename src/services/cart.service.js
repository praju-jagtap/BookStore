/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
import Books from '../models/books.model';
import Cart from '../models/cart.model';

//add book into cart if data is not exist then create cart
export const addBookIntoCart = async (body, _id) => {
    let data = await Books.findOne({ _id });
    console.log('data --->', data);

    let allDetail = {
        'productId': data._id,
        'description': data.description,
        'bookName': data.bookName,
        'bookImage': data.bookImage,
        'bookQuantityInStock': data.quantity,
        'author': data.author,
        'price': data.price
    }
    if (data !== null) {
        if (data.quantity >= 1) {
            const cartExist = await Cart.findOne({ userID: body.userID });
            console.log('cart exist-->', cartExist);

            if (cartExist === null) {
                // eslint-disable-next-line no-trailing-spaces
                const createCart = await Cart.create({
                    userID: body.userID,
                    books: [allDetail]
                });
                console.log('create cart-->', createCart);
                return createCart;
            } else {
                let flag = false;
                await cartExist.books.forEach(bookelement => {
                    if (bookelement.productId === _id) {
                        bookelement.quantity += 1;
                        flag = true;
                    }
                });
                if (flag === false) {
                    await cartExist.books.push(allDetail);
                }
                let updateMyCart = await Cart.findOneAndUpdate(
                    { userID: body.userID },
                    { books: cartExist.books },
                    { new: true }
                );
                console.log('update my cart data-->', updateMyCart);
                return updateMyCart;
            }
        } else {
            throw new Error('Stock Book quantity is less than Zero');
        }
    } else {
        throw new Error('Book is Not Present, Please Enter Valid Book Id');
    }
}