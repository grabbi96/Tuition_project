import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TutorImage from "../../assets/images/technology1.jpg";

class TutorialList extends Component {
    state = {}
    getCategory = id => {
        if (this.props.category) {

            let dd = this.props.category.find(d => d.id == id)
            if (dd) {
                return dd.title
            }
            console.log(dd)
            // return dd.title
        }
    }

    getSubCategory = id => {
        if (this.props.subCategory) {
            let dd = this.props.subCategory.find(d => d.id == id)
            if (dd) {
                return dd.title
            }
        }
    }
    render() {
        return (
            <section>
                <div className="container">
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
                    <h2>my Tutorial</h2>
                    <div class="category-wrapper row">
                        {this.props.tutorials && this.props.tutorials.map(tut => (
                            <div className="col-md-4">
                                <div class="product-item">
                                    <div class="product-thumb">
                                        <img src={TutorImage} alt="" />
                                        <div class="product-overly">
                                            <Link to="/get_tutorial/details" class="view">
                                                View details
                              </Link>
                                            <a href="#" class="order">
                                                Order now
                              </a>
                                        </div>
                                    </div>
                                    <div class="product-content">
                                        <div class="product-content-top">
                                            <div class="product-top-content">
                                                <div>
                                                    <img
                                                        src="assets/images/turial11.png"
                                                        alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <h5>
                                                        <a href="#">{tut.title}</a>
                                                    </h5>
                                                    <ul class="star-list">
                                                        <li>
                                                            <a href="#">
                                                                <i class="fas fa-star" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fas fa-star" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fas fa-star" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fas fa-star" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <i class="fas fa-star" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p>19$</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-content-bottom">
                                            <div>
                                                <p>Category</p>
                                                <span>Sub Category</span>
                                            </div>
                                            <div>
                                                <p> {this.getCategory(tut.category_id)}</p>
                                                <span>{this.getSubCategory(tut.sub_category_id)}</span>
                                            </div>
                                        </div>

                                        <div class="product-content-button">
                                            <Link
                                                to={"/get_my_tutorial/" + tut.id}
                                                class="theme-solid-button"
                                            >
                                                View Details tutorial
                              </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>




                        ))}



                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        tutorials: state.edu.tutorialsList.tutorials,
        category: state.edu.tutorials.tutorial_categories,
        subCategory: state.edu.tutorials.tutorial_sub_categories,
    };
};
export default connect(mapStateToProps)(TutorialList);