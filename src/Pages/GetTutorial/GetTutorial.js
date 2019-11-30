import React, { Component } from "react";
import TutorImage from "../../assets/images/technology1.jpg";
import { Link } from "react-router-dom";
import "./GetTutorial.css";
import { connect } from "react-redux";
class GetTutorial extends Component {
  state = {
    filterTutorial: ""
  };

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
  divisionHandler = e => {
    let val = e.target.value;
    let subCategory = this.props.subCategory.filter(ds => {
      return ds.id == val
    })
    this.setState({
      category: val,
      subCategory
    })
    let filterTutorial = this.props.tutorials.filter(tt => tt.category_id == val)
    this.setState({
      filterTutorial
    })
  }
  subCategoryHandler = e => {
    let val = e.target.value;
    let filterTutorial = this.props.tutorials.filter(tt => tt.sub_category_id == val)
    this.setState({
      filterTutorial
    })
  }
  searchHandler = (event) => {
    var updatedList = this.props.tutorials;
    updatedList = updatedList.filter(function (item) {
      return item.title.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({
      filterTutorial: updatedList
    })
  }
  render() {

    console.log(this.props.category)
    return (
      <main class="category-main-area tutorials-section">
        <section class="category-main-section">
          <div class="container">
            <div class="row">
              <div class="tutorial-search-header">
                <div className="category-header text-center bg-new-color">
                  <h4 class="text-center">Search tutorials</h4>
                </div>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search tutorial"
                        onChange={this.searchHandler}
                      />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="search-category">
                      <div class="input-group mb-3">
                        <select class="custom-select" id="inputGroupSelect01" onChange={this.divisionHandler}>
                          <option selected>Category</option>
                          {this.props.category && this.props.category.map(dv => (
                            <option value={dv.id}>{dv.title}</option>
                          ))}

                        </select>
                      </div>
                      {/* <select class="custom-select" id="inputGroupSelect01">
                        <option selected="">Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select> */}

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                        </div>
                        <select class="custom-select" id="inputGroupSelect01" name="categorySub" onChange={this.subCategoryHandler}>
                          <option>Sub Category</option>
                          {this.state.subCategory && this.state.subCategory.map(ds => {
                            return (
                              <option value={ds.id}>{ds.title}</option>
                            )
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row category-main-item">
                <div class="col-lg-12">
                  <div class="category-items">
                    {/* <div class="category-header">
                      <h2>Recently Added WordPress Themes</h2>
                    </div> */}
                    <div className={this.state.filterTutorial ? "d-none" : "d"}>
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
                                    to={"/get_tutorial/" + tut.id}
                                    class="theme-solid-button border-raius-less"
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

                    <div className={!this.state.filterTutorial ? "d-none" : "d"}>
                      <div class="category-wrapper row">
                        {this.state.filterTutorial && this.state.filterTutorial.map(tut => (
                          <div class="col-lg-4 col-md-6">
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
                                    to={"/get_tutorial/" + tut.id}
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

                  </div>
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
    tutorials: state.edu.tutorials.tutorials,
    category: state.edu.tutorials.tutorial_categories,
    subCategory: state.edu.tutorials.tutorial_sub_categories,
  };
};
export default connect(mapStateToProps)(GetTutorial);
