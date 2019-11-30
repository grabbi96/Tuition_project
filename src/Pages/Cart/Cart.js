import React, { Component } from 'react';
import "./Cart.css"
import { connect } from 'react-redux';
import { setCart } from '../../store/actions/eventAction'
import { Link } from "react-router-dom"
class Cart extends Component {
    state = {}
    componentDidMount() {
        this.props.setCart()
    }
    render() {
        let books = []
        if (this.props.cartBooks && this.props.books) {
            console.log(this.props.cartBooks.length, this.props.books.length)
            this.props.cartBooks.map(cb => {
                let book = this.props.books.find(bk => bk.id == cb)
                books.push(book)
            })
        }
        return (
            <section>
                <div className="container tex">
                <div className="profile-buttons d-flex ">
                  <Link to="/add/toturial" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Add Toturial
                      </Link>
                  {/* <Link to="/profile/email_resume" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Applied Tuitions
                      </Link> */}

                  <Link to="/tutorial/lists" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Tutorial List
                      </Link>
                  <Link to="/profile/cart" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Cart Information
                      </Link>
                </div>
                    <h4 className="text-center">Cart Lists</h4>
                    <div className="row">
                    <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div class="cancel-item-area">
                                {books.length > 0 && books.map(book => {
                                    return (
                                        <div class="cancel-item">

                                            <div class="cancel-content">
                                                <h3>{book.title}</h3>
                                                <h5>Author : {book.author}</h5>
                                                <h5>Publisher : {book.publisher}</h5>
                                                <h5>Tk {book.amount}</h5>
                                            </div>
                                            <div class="cancel-thumb">
                                                <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + book.image} alt="" />
                                                <i class="far fa-times-circle"></i>
                                            </div>
                                        </div>
                                    )
                                })}

                                <div class="confirm text-center">
                                    <Link to="/book_sale/details/order" class="bg-color theme-line-button hhh">Continue to next</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        books: state.books.books,
        cartBooks: state.books.cartBooks,
        category: state.books.category,
        subCategory: state.books.subCategory,
        com: state.comm.commonSync,
    };
};
export default connect(mapStateToProps, { setCart })(Cart);