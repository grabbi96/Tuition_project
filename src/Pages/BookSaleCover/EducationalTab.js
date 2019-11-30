import React, { Component } from 'react';

import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBFormInline, MDBDropdownItem, MDBBtn } from 'mdbreact'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { addCart } from "../../store/actions/eventAction"
class Education extends Component {
    state = {
        subCategory: false,
        filterBooks: false,
        classes: []
    }


    getSubCategory = val => {
        let filtered = this.props.subCategory.filter(st => {
            return st.category_id == val
        })
        return filtered
    }
    changeSubCategory = (val) => {
        this.setState({
            subCategory: true
        })
        let books = this.props.books.filter(book => {
            return book.subcategory_id == val
        })
        this.setState({
            filterBooks: books
        })
    }
    getAuthor = (val) => {
        this.setState({
            subCategory: true
        })

        let updatedList = this.props.books.filter(function (item) {
            if (item.author) {
                return item.author.toLowerCase().search(
                    val.toLowerCase()) !== -1;
            }

        });
        this.setState({
            filterBooks: updatedList
        })
    }
    getProvider = (val) => {
        this.setState({
            subCategory: true
        })

        let updatedList = this.props.books.filter(function (item) {
            if (item.publisher) {
                return item.publisher.toLowerCase().search(
                    val.toLowerCase()) !== -1;
            }

        });
        this.setState({
            filterBooks: updatedList
        })
    }
    getPrice = (val) => {
        this.setState({
            subCategory: true
        })
        let updatedList = this.props.books.filter(function (item) {
            console.log(item.amount)
            if (Number(item.amount) < Number(val)) {
                return item
            }

        });
        this.setState({
            filterBooks: updatedList
        })
    }
    searchHandler = (event) => {
        this.setState({
            subCategory: true
        })
        var updatedList = this.props.books;
        updatedList = updatedList.filter(function (item) {
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            filterBooks: updatedList
        })
    }
    searchHandlerSub = (event) => {
        var updatedList = this.state.filterBooks;
        updatedList = updatedList.filter(function (item) {
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            filterBooks: updatedList
        })
    }
    changeMediumBook = (val) => {
        this.setState({
            subCategory: true
        })
        if (val == "English Version" || val == "English Medium") {
            let classes = this.props.com.classes.filter(cl => cl.medium_id == "2")
            this.setState({
                classes
            })
        }
        if (val == "Bangla Medium" || val == "Bangla Version") {
            let classes = this.props.com.classes.filter(cl => cl.medium_id == "1")
            this.setState({
                classes
            })
        }
    }
    byClass = (val) => {
        let books = this.props.books.filter(book => {
            return book.subcategory_id == val
        })
        this.setState({
            filterBooks: books
        })
    }
    addToCard = val => {
        this.props.addCart(val)
    }
    render() {
        let books;
        if(this.props.books){
               books = this.props.books.filter(bk => bk.type == 1)
        }
        

        return (
            <div>
                <div className="dropdown-list-area">
                    {this.props.category && this.props.category.map(ct => (
                        <MDBDropdown>
                            <MDBDropdownToggle caret color="primary">
                                {ct.title}
                            </MDBDropdownToggle>
                            <MDBDropdownMenu basic>
                                {this.getSubCategory(ct.id).map(gst => {
                                    if (gst.title == "English Version" || gst.title == "Bangla Medium" || gst.title == "English Medium") {
                                        return <MDBDropdownItem onClick={() => this.changeMediumBook(gst.title)}>{gst.title}</MDBDropdownItem>
                                    }
                                    return (
                                        <MDBDropdownItem onClick={() => this.changeSubCategory(gst.id)}>{gst.title}</MDBDropdownItem>
                                    )
                                })}
                            </MDBDropdownMenu>
                        </MDBDropdown>
                    ))}


                    <MDBDropdown>
                        <MDBDropdownToggle caret color="primary">
                            Price
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem onClick={() => this.getPrice("100")}>0 - 100tk</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getPrice("200")}>0 - 200tk</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getPrice("500")}>0 - 500tk</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getPrice("750")}>0 - 750tk</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getPrice("1000")}>0 - 1000tk</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    {/* <MDBDropdown>
                        <MDBDropdownToggle caret color="primary">
                            Provider
                        </MDBDropdownToggle>
                        <MDBDropdownMenu basic>
                            <MDBDropdownItem onClick={() => this.getProvider("Dimik ")}>Dimik </MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getProvider("Jahid")}>Jahid</MDBDropdownItem>
                            <MDBDropdownItem onClick={() => this.getProvider("Mahtab")}>Mahtab</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown> */}


                    <MDBFormInline className="md-form ml-auto">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.searchHandler} />
                        <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
                            Search
        </MDBBtn>
                    </MDBFormInline>
                </div>
                {this.state.subCategory && (
                    <div className="div text-center">
                        <h5>Sub Category</h5>
                        <div className="dropdown-list-area subcategory">
                            {this.props.category && this.props.category.map(ct => (
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary">
                                        {ct.title}
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        {this.getSubCategory(ct.id).map(gst => (
                                            <MDBDropdownItem onClick={() => this.changeSubCategory(gst.id)}>{gst.title}</MDBDropdownItem>
                                        ))}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            ))}


                            {this.state.classes && (
                                <MDBDropdown>
                                    <MDBDropdownToggle caret color="primary">
                                        Class
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu basic>
                                        {this.state.classes.map(cl => (
                                            <MDBDropdownItem onClick={() => this.byClass(cl.id)}>{cl.title} </MDBDropdownItem>
                                        ))}
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            )}

                            <MDBFormInline className="md-form ml-auto">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" onChange={this.searchHandlerSub} />
                                <MDBBtn color="unique" rounded size="sm" type="submit" className="mr-auto">
                                    Search
        </MDBBtn>
                            </MDBFormInline>
                        </div>

                    </div>
                )}


                <div className="category-link-area">
                    <div className="row">
                        {/* {mainBooks && (
                            mainBooks.map(item => {
                                if (item) {
                                    return (
                                        <div className="col-lg-2">
                                            <Link to={"/book_sale/items/" + item.id} >
                                                <div class="bookSubject text-center">
                                                    <i class="fas fa-book" />
                                                    <div class="text-center bookSubjectCaption">
                                                        <h2>{item.title}</h2>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                }
                            })
                        )} */}


                    </div>
                    <div className={this.state.filterBooks ? "d-none" : "d"}>
                        <div className="row">
                            {books && books.map(book => {
                                return (
                                    <div className="col-lg-4">
                                        <div class="new-grid simpleCart_shelfItem z-depth-1">
                                            <div class="new-top">
                                                <a href="">
                                                    <img
                                                        // src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
                                                        src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + book.image}
                                                        class="img-responsive"
                                                        alt=""
                                                    />
                                                </a>
                                                <div class="new-text">
                                                    <ul>
                                                        <li>
                                                            <a class="item_add" href="#" onClick={(e) => {
                                                                e.preventDefault()
                                                                this.addToCard(book.id)
                                                            }} >
                                                                {" "}
                                                                Add to cart
                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="single.html">Quick View </a>
                                                        </li>
                                                        <li>
                                                            <Link to={"/book_sale/item/details/" + book.id}>
                                                                Show Details
                                    </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="new-bottom">
                                                <h5>
                                                    <a class="name" href="">
                                                        {book.title}
                                                    </a>
                                                </h5>
                                                <ul>
                                                    <li>Author : {book.author}</li>
                                                    <li>Publisher : {book.publisher}</li>
                                                </ul>
                                                <div class="ofr">
                                                    <p>
                                                        <span class="item_price">Tk {book.amount}</span>
                                                    </p>
                                                    <div class="rating">
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })}

                        </div>
                    </div>


                    <div className={!this.state.filterBooks ? "d-none" : "d"}>
                        <div className="row">
                            {this.state.filterBooks && this.state.filterBooks.map(book => {
                                return (
                                    <div className="col-lg-4">
                                        <div class="new-grid simpleCart_shelfItem z-depth-1">
                                            <div class="new-top">
                                                <a href="">
                                                    <img
                                                        // src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
                                                        src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + book.image}
                                                        class="img-responsive"
                                                        alt=""
                                                    />
                                                </a>
                                                <div class="new-text">
                                                    <ul>
                                                        <li>
                                                            <a class="item_add" href="">
                                                                {" "}
                                                                Add to cart
                                    </a>
                                                        </li>
                                                        <li>
                                                            <a href="single.html">Quick View </a>
                                                        </li>
                                                        <li>
                                                            <Link to={"/book_sale/item/details/" + book.id}>
                                                                Show Details
                                    </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="new-bottom">
                                                <h5>
                                                    <a class="name" href="">
                                                        {book.title}
                                                    </a>
                                                </h5>
                                                <div class="ofr">
                                                    <p>
                                                        <span class="item_price">Tk {book.amount}</span>
                                                    </p>
                                                    <div class="rating">
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                        <span>☆</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                )
                            })}

                        </div>
                    </div>

                </div>




            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        books: state.books.books,
        category: state.books.category,
        subCategory: state.books.subCategory,
        com: state.comm.commonSync,
    };
};
export default connect(mapStateToProps, { addCart })(Education);