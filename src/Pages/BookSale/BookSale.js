import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BookSale.css";
import { connect } from "react-redux";
class BookSale extends Component {
  state = {
    filterBooks: ""
  };

  componentDidMount() {
    console.log(this.props.match.params)
  }

  changeHandler = (a, b) => {
    console.log(a, b)
    let books = this.props.books.filter(book => {
      return book.class_id == this.props.match.params.class
    })

    let filterBooks = books.filter(bk => {

      if (bk.amount > a && bk.amount < b) {
        return bk
      }
    })
    this.setState({
      filterBooks
    })
    console.log(filterBooks)
  }
  changeHandlerC = (val) => {
    let books = this.props.books.filter(book => {
      return book.class_id == this.props.match.params.class
    })
    let filterBooks = books.filter(bk => {

      if (bk.class_id == val) {
        return bk
      }
    })
    this.setState({
      filterBooks
    })
    console.log(filterBooks)
  }
  render() {
    let classes;
    let books = this.props.books.filter(book => {
      return book.class_id == this.props.match.params.class
    })

    console.log(this.props.com.classes)

    return (
      <main>
        <section className="booksale-section section">
          <div className="container">
            <div className="section-header">
              <h2>Products</h2>
            </div>
            <div className="section-wrapper">
              <div className="row">
                <div className="col-lg-3">
                  <div class="leftMenuArea pull-left">
                    <form action="">

                      <h2 id="pricesHeader">
                        <i class="fa fa-angle-down" />
                        Shop by Price
                    </h2>
                      <ul class="list-unstyled catList" id="prices">
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="0 - 2790"
                                type="radio"
                                name="price"
                                onclick="clickAction()"
                                onChange={(e) => this.changeHandler(0, 200)}
                              />
                              Tk. 0 - 200
                          </label>
                          </p>
                        </li>
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="2791 - 5600"
                                type="radio"
                                name="price"
                                onclick="clickAction()"
                                onChange={(e) => this.changeHandler(0, 500)}
                              />
                              Tk. 0 - 500
                          </label>
                          </p>
                        </li>
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="5601 - 8400"
                                type="radio"
                                name="price"
                                onclick="clickAction()"
                                onChange={(e) => this.changeHandler(500, 1000)}
                              />
                              Tk. 500 - 1000
                          </label>
                          </p>
                        </li>
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="8401 - 11200"
                                type="radio"
                                name="price"
                                onclick="clickAction()"
                                onChange={(e) => this.changeHandler(1000, 2000)}
                              />
                              Tk. 1000 - 2000
                          </label>
                          </p>
                        </li>
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="11201 - 14000"
                                type="radio"
                                name="price"
                                onChange={(e) => this.changeHandler(2000, 5000)}
                              />
                              Tk. 2000 - 5000
                          </label>
                          </p>
                        </li>
                      </ul>



                    </form>

                    {/* <h2 id="brandsHeader">
                      <i class="fa fa-angle-down" />
                      Shop by Brand
                    </h2>
                    <ul class="list-unstyled catList" id="brand">
                      {this.props.com.classes && this.props.com.classes.map(cl => (
                        <li>
                          <p>
                            <label>
                              <input
                                class="checkPrice"
                                value="0 - 2790"
                                type="radio"
                                name="price"
                                onclick="clickAction()"
                                onChange={(e) => this.changeHandlerC(cl.id)}
                              />
                              {cl.title}
                            </label>
                          </p>
                        </li>
                      ))}



                    </ul> */}

                  </div>
                </div>
                <div className="col-lg-9">
                  <Tabs
                    defaultActiveKey="all"
                    transition={false}
                    id="noanim-tab-example"
                  >
                    <Tab eventKey="all" title="All">
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
                                        {book.name}
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
                                        {book.name}
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
                    </Tab>
                    <Tab eventKey="profile" title="New Released">
                      <div className="row">
                        <div className="col-lg-4">
                          <div class="new-grid simpleCart_shelfItem z-depth-1">
                            <div class="new-top">
                              <a href="">
                                <img
                                  src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
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
                                    <Link to="/book_sale/items/details">
                                      Show Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="new-bottom">
                              <h5>
                                <a class="name" href="">
                                  All Pantene Product
                                </a>
                              </h5>
                              <div class="ofr">
                                <p>
                                  <span class="item_price">Tk1000</span>
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
                      </div>
                    </Tab>
                    <Tab eventKey="contact" title="Best Sell">
                      <div className="row">
                        <div className="col-lg-4">
                          <div class="new-grid simpleCart_shelfItem z-depth-1">
                            <div class="new-top">
                              <a href="">
                                <img
                                  src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
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
                                    <Link to="/book_sale/items/details">
                                      Show Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="new-bottom">
                              <h5>
                                <a class="name" href="">
                                  All Pantene Product
                                </a>
                              </h5>
                              <div class="ofr">
                                <p>
                                  <span class="item_price">Tk1000</span>
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

                        <div className="col-lg-4">
                          <div class="new-grid simpleCart_shelfItem z-depth-1">
                            <div class="new-top">
                              <a href="">
                                <img
                                  src="https://salegarden.com/upload/frontend/product_image_file/0201802110832508.jpg"
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
                                    <Link to="/book_sale/items/details">
                                      Show Details
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div class="new-bottom">
                              <h5>
                                <a class="name" href="">
                                  All Pantene Product
                                </a>
                              </h5>
                              <div class="ofr">
                                <p>
                                  <span class="item_price">Tk1000</span>
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
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
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
export default connect(mapStateToProps)(BookSale);
