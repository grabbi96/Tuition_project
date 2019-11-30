import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody
} from "react-accessible-accordion";
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import "./BookSaleDetails.css";
class BookSaleDetails extends Component {
  state = {};
  render() {
    let books = this.props.books.filter(book => {
      return book.id == this.props.match.params.id
    })
    console.log(books)
    return (
      <main>
        <section className="book-sell-details-section">
          <div className="container">
            <div className="row wowow">
              <div className="col-lg-4">
                <img
                  // src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
                  src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + books[0].image}
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <div
                  class="single-top-left simpleCart_shelfItem wow fadeInRight animated animated"
                  data-wow-delay=".5s"
                >
                  <h3> {books[0] && books[0].title}</h3>

                  <div class="single-rating">
                    <p>0 out of 5</p>
                    <a
                      target="_blank"
                      href="https://salegarden.com/review/xYBEK20180211083250"
                    >
                      Add Your Review
                    </a>
                  </div>
                  <h6 class="item_price">Tk- {books[0] && books[0].amount}</h6>
                  <div class="btn_form">
                    <Link
                      to="/book_sale/details/order"
                      className="theme-solid-button sm m"
                    >
                      ADD TO CART
                    </Link>
                    <a href="" className="theme-solid-button sm m">
                      01636408000
                    </a>
                  </div>

                  <ul class="size">
                    <p>
                      <span>Product Country</span>{" "}
                    </p>
                    <p>
                      <span>Product Brand</span>{" "}
                    </p>
                  </ul>
                  <ul class="color">
                    <p>
                      {" "}
                      <span>Total View</span> 178
                    </p>
                    <p>
                      {" "}
                      <span>Product Code</span>{" "}
                    </p>
                  </ul>
                  <div class="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="book-accortion ">
          <div className="container">
            <div className="row">
              <Accordion>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>{books[0] && books[0].description}</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>Refund Policy</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>Delivery</h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>Body content</p>
                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books.books,
    com: state.comm.commonSync,
  };
};

export default connect(mapStateToProps)(BookSaleDetails);
