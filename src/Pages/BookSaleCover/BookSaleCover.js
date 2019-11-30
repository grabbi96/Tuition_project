import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./BookSaleCover.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBFormInline, MDBDropdownItem, MDBBtn } from 'mdbreact'
import BookTab from "./BookTab"
import EducationalTab from "./EducationalTab";
class BookSaleCover extends Component {
  state = {
    books: [],
    subCategory: false
  };

  componentWillReceiveProps() {

  }
  changeSubCategory = () => {
    this.setState({
      subCategory: true
    })
  }
  render() {
    let filter = []
    if (this.props.books) {
      filter = [...new Set(this.props.books.map(item => item.class_id))];
    }
    let mainBooks = []
    if (filter && this.props.com.classes) {
      filter.forEach(f => {
        let findClass = this.props.com.classes.find(cl => cl.id == f)
        mainBooks.push(findClass)
      })
    }

    console.log(mainBooks)


    return (
      <main>
        <section className="booksale-cover-section">
          <div className="container">
            <div className="section-header">
              {/* <h2>Books Category</h2> */}
            </div>

            <div className="section-wrappeer">
              <Tabs
                defaultActiveKey="categories"
                transition={false}
                id="noanim-tab-example"
              >
                <Tab eventKey="categories" title="Book" className="book-tb">
                  <BookTab />

                </Tab>
                <Tab eventKey="brands" title="educational equipments">
                  <div className="row">
                    {/* {mainBooks && (
                      mainBooks.map(item => {
                        if (item) {
                          return (
                            <div className="col-lg-2">
                              <Link to={"/book_sale/items/"} >
                                <div class="bookSubject text-center">
                                  <i class="fas fa-book" />
                                  <div class="text-center bookSubjectCaption">
                              <h2>Title</h2>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )
                        }
                      })
                    )} */}
                    <EducationalTab />
                  </div>
                </Tab>
                <Tab eventKey="one" title="one">
                  <h2>one</h2>
                </Tab>
                <Tab eventKey="two" title="two">
                  <h2>two</h2>
                </Tab>
                <Tab eventKey="three" title="three">
                  <h2>three</h2>
                </Tab>
                <Tab eventKey="four" title="four">
                  <h2>four</h2>
                </Tab>
                <Tab eventKey="five" title="five">
                  <h2>five</h2>
                </Tab>
                <Tab eventKey="six" title="six">
                  <h2>six</h2>
                </Tab>
                <Tab eventKey="seven" title="seven">
                  <h2>seven</h2>
                </Tab>
                <Tab eventKey="seven" title="seven">
                  <h2>seven</h2>
                </Tab>
              </Tabs>
              ;
            </div>
          </div>
        </section>
      </main >
    );
  }
}
const mapStateToProps = state => {
  return {
    books: state.books.books,
    com: state.comm.commonSync,
  };
};
export default connect(mapStateToProps)(BookSaleCover);
