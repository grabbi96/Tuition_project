import { SET_BOOKS, SET_BOOKS_CATEGORY, SET_BOOKS_SUB_CATEGORY, SET_CART_BOOK } from '../actions/actionTypes'
const init = {
    books: [],
    category: [],
    subCategory: [],
    cartBooks: []
}
const booksReducer = (store = init, action) => {
    switch (action.type) {
        case SET_BOOKS: {
            return {
                ...store,
                books: action.payload.books
            }
        }
        case SET_BOOKS_CATEGORY: {
            return {
                ...store,
                category: action.payload.category
            }
        }
        case SET_BOOKS_SUB_CATEGORY: {
            return {
                ...store,
                subCategory: action.payload.subCategory
            }
        }
        case SET_CART_BOOK: {
            return {
                ...store,
                cartBooks: action.payload.cartBooks
            }
        }
        default: return store
    }

}

export default booksReducer