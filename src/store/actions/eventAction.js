import Axios from "axios"
import { SET_CART_BOOK } from "./actionTypes"

export const addCart = data => dispatch => {

    let cartBooks = JSON.parse(localStorage.getItem('books'))
    if (!cartBooks) {
        let books = [data]
        localStorage.setItem('books', JSON.stringify(books))
        dispatch(setCart())
        return
    }
    let cart = cartBooks.find(cb => cb == data)
    if (cart) {
        alert("you already added this")
        return
    }
    cartBooks.push(data)
    localStorage.setItem('books', JSON.stringify(cartBooks))
    // console.log(cartBooks)
    dispatch(setCart())
}

export const setCart = data => dispatch => {
    console.log(JSON.parse(localStorage.getItem('books')))
    let cartBooks = JSON.parse(localStorage.getItem('books'))
    dispatch({ type: SET_CART_BOOK, payload: { cartBooks } })
}
