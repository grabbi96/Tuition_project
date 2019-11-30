import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import "./BookOrder.css"

class BookOrder extends Component {
    state = {
        divisions: [],
        districts: [],
        areas: [],
        division: "",
        district: "",
        area: "",
        payment: "",
        mobile: "",
        address: "",
        name: ""
    }
    componentDidMount() {

    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    divisionHandler = e => {
        let val = e.target.value;
        let districts = this.props.com.districts.filter(ds => {
            return ds.division_id == val
        })
        this.setState({
            division: val,
            districts
        })
        console.log(val)
        console.log(districts)
    }
    districtHandler = e => {
        let val = e.target.value;
        let areas = this.props.com.areas.filter(ds => {
            console.log(ds.district_id)
            return ds.district_id == val
        })
        this.setState({
            district: val,
            areas
        })
        console.log(val)
        console.log(areas)
    }
    submitHandler = e => {
        e.preventDefault()
        let books = []
        if (this.props.cartBooks && this.props.books) {
            this.props.cartBooks.map(cb => {
                let book = this.props.books.find(bk => bk.id == cb)
                let bks = {
                    "book_id":book.id,
                    "quantity":1,
                    "price":book.amount
                }
                books.push(bks)
                
            })
        }
        let data = {
            authentication: 'Tuition.app',
            division_id: this.state.division,
            district_id: this.state.district,
            area_id: this.state.area ? this.state.area : "1",
            full_name: this.state.name,
            book_id: "2",
            mobile: this.state.mobile,
            payment_method: '1',
            address: this.state.address,
            api_token: this.props.auth.api_token,
             data:{
                "items":books
            }
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/bookorders/add', data)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        let divisions, mediums, classes, subjects, facilities, learnings;
        if (this.props.com) {
            divisions = this.props.com.divisions
            mediums = this.props.com.media
            classes = this.props.com.classes
            subjects = this.props.com.subjects
            facilities = this.props.com.facilities
            learnings = this.props.com.learnings
        }
        let books = []
        let bookPrice = 0
        if (this.props.cartBooks && this.props.books) {
            console.log(this.props.cartBooks.length, this.props.books.length)
            this.props.cartBooks.map(cb => {
                let book = this.props.books.find(bk => bk.id == cb)
                if (book) {
                    bookPrice += Number(book.amount)
                }

                books.push(book)
            })
        }
        console.log(books)
        return (
            <section>
                <div class="register-details-section">
                    <div className="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="register-main">
                                    <div class="register-buy-header text-center">
                                        <h2>Order Details</h2>
                                    </div>

                                    <form onSubmit={this.submitHandler} method="POST" class="form-horizontal" action="https://www.salegarden.com/orderDetailsStore">
                                        <input type="hidden" name="_token" value="lMjf7JajL8CLqbo68BUHzk8i3l5W1L6Var5KeKbk" />
                                        <input type="hidden" name="order_track_id" value="9IenHPIi8JA20190706144759" />
                                        <div class="register-buy-wrapper">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <label>Full Name</label>
                                                </div>
                                                <div class="col-md-10 form-group">
                                                    <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Write your name" onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>Division</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.divisionHandler}>
                                                            <option value="">Select Area</option>
                                                            {divisions && divisions.map(dv => (
                                                                <option value={dv.id}>{dv.title}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>District</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.districtHandler}>

                                                            <option value="">Select Area</option>
                                                            {this.state.districts && this.state.districts.map(ds => {
                                                                return (
                                                                    <option value={ds.id}>{ds.title}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>area</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.changeHandler}>
                                                            <option value="">Select Area</option>
                                                            {this.state.areas && this.state.areas.map(ds => {
                                                                console.log(ds)
                                                                return (
                                                                    <option value={ds.id}>{ds.title}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>Address</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <textarea onChange={this.changeHandler} placeholder="write your address" className="form-control" name="address">{this.state.address}</textarea>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>Mobile no</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <input type="text" className="form-control" name="mobile" onChange={this.changeHandler} value={this.state.mobile} placeholder="write your number" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2">
                                                        <label>Payment Method</label>
                                                    </div>
                                                    <div class="col-md-10 form-group">
                                                        <select name="payment" className="form-control" onChange={this.changeHandler}>
                                                            <option value="COD">Cash on Delivery</option>
                                                            <option value="COD">Bkash Payment</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="form-group text-center">
                                            <div>
                                                <button type="submit" class="btn btn-primary">
                                                    Order Confirm 
                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div className="confirm-books-area">
                                    {books && books.map(book => {
                                        if (book) {
                                            return (
                                                <div class="cancel-item">

                                                    <div class="cancel-content">
                                                        <h3>{book.title}</h3>
                                                        <h5>Tk {book.amount}</h5>
                                                    </div>
                                                    <div class="cancel-thumb">
                                                        <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + book.image} alt="" />
                                                    </div>
                                                </div>
                                            )
                                        }

                                    })}
                                </div>
                                <div className="total-price-area">
                                    <h5>Total Price : {bookPrice} </h5>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </section >
        );
    }
}
const mapStateToProps = state => {
    return {
        com: state.comm.commonSync,
        error: state.error,
        auth: state.auth.user,
        books: state.books.books,
        cartBooks: state.books.cartBooks,
    };
};
export default connect(mapStateToProps)(BookOrder);