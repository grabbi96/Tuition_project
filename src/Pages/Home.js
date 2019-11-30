import React, { Component } from "react";
import Carousel from "../Components/Carousel/Carousel";
import Shape1 from "../assets/images/shape1.png";
import { Link } from "react-router-dom";
import "./Home.css";
import teacher from "../assets/images/teacher.jpg";
import { connect } from "react-redux";
import TutorImage from "../assets/images/technology1.jpg";
class Home extends Component {
  state = {};
  findDivision = (val) => {
    if (this.props.com.divisions) {
      let dd = this.props.com.divisions.find(d => d.id == val)
      // 
      if (dd) {
        return dd.title
      }
      console.log(val)
    }




  }
  findDistrict = (val) => {
    if (this.props.com.districts) {
      let dd = this.props.com.districts.find(d => d.id == val)
      if (dd) {
        return dd.title
      }
    }
  }
  findArea = (val) => {
    if (this.props.com.areas) {
      let dd = this.props.com.areas.find(d => d.id == val)
      if (dd) {
        return dd.title
      }
    }
  }
  findMedium = val => {
    if (this.props.com.media) {
      let dd = this.props.com.media.find(d => d.id == val)
      if (dd) {
        return dd.title
      }
    }
  }
  findClass = val => {
    if (this.props.com.classes) {
      let dd = this.props.com.classes.find(d => d.id == val)
      if (dd) {
        return dd.title
      }
    }
  }

  mediumChange = e => {
    let val = e.target.value;
    let filterJob = this.props.tuitions.filter(tt => tt.medium_id == val)
    this.setState({
      filterJob
    })
  }
  render() {
    console.log(this.props.popular)
    return (
      <main>
        <section class="banner-section">
          <Carousel />
        </section>

        <section class="team-section section-padding-20">
          <div class="container">
            <div class="">
              <div class="section-header">
                <div class="category-header text-center bg-new-color">
                  <h2>Our Premium Tutors</h2>
                </div>
              </div>
              <div class="section-wrapper">
                <div class="row three-row home-tutor">
                  {this.props.popular.users && this.props.popular.users.map(pp => (
                    <div class="col-lg-4 col-md-6">
                      <div class="team-item z-depth-1">
                        <div class="team-thumb">
                          {pp.image && (
                            <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + pp.image} alt="main" />
                          )}
                          {!pp.image && (
                            <img src={teacher} alt="teacher" />
                          )}
                          {/*  */}
                        </div>
                        <div class="team-contant">
                          <h3>{pp.name}</h3>
                          <div className="team-content-overlay">
                            <h4>web developer</h4>
                            <p>we are in to a web site for you this</p>
                            <ul class="developer-s-info">
                              <li>
                                <p>Hourly rate</p> <span>58$</span>
                              </li>
                              <li>
                                <p>Location</p> <span>Savar, Dhaka</span>
                              </li>
                              <li>
                                <p>Service Time</p> <span>8hours</span>
                              </li>
                            </ul>
                            <Link to="/teacher_profile" className="btn sm white">
                              View Profile
                          </Link>
                          </div>
                        </div>
                      </div>
                    </div>



                  ))}


                </div>
                {/* <Link to="tutor_list" className="wow fadeInUp   theme-solid-button theme-button animated">View All Tutors</Link> */}
              </div>
            </div>
          </div>
        </section>

        <section className="find-course-section">
          <div className="container">
            <div class="section-header">
              {/* <h2>our honourable teacher</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt reprehenderit recusandae odit temp.
              </p> */}
            </div>
            <div className="section-wrapper">
              <div class="category-header text-center bg-new-color">
                <h2>Premium Tuitions</h2>
              </div>
              {this.props.popular.tuitions && this.props.popular.tuitions.map(item => (
                <div class="client-post-item">
                  <a
                    href="client post - details.php"
                    class="non-inline-block"
                  />
                  <div class="row">
                    <a
                      href="client post - details.php"
                      class="non-inline-block"
                    />
                    <div class="col-lg-9">
                      <Link
                        to={"/jobdetails/" + item.id}
                        class="non-inline-block"
                      >
                        <h4>{item.description ? item.description : "title"}</h4>
                      </Link>
                      {/* <ul class="skills">
                            <a
                              href="client post - details.php"
                              class="non-inline-block"
                            />
                            <li>
                              <a
                                href="client post - details.php"
                                class="non-inline-block"
                              />
                              <a href="#">html</a>
                            </li>
                            <li>
                              <a href="#">css</a>
                            </li>
                            <li>
                              <a href="#">html5</a>
                            </li>
                            <li>
                              <a href="#">javascript</a>
                            </li>
                            <li>
                              <a href="#">vue.js</a>
                            </li>
                            <li>
                              <a href="#">react.js</a>
                            </li>
                            <li>
                              <a href="#">angular.js</a>
                            </li>
                          </ul> */}
                      <ul className="d-flex justify-content-between">
                        <li><span className="bold">Category :</span> {this.findMedium(item.medium_id)}</li>
                        <li><span className="bold">Class :</span> {this.findClass(item.class_id)}</li>
                        <li><span className="bold">Joining Date : </span>{item.joining_date}</li>
                      </ul>
                      <p>
                        {item.description}
                      </p>
                      <p>Salary: {item.salary}</p>
                      <p>Week days: {item.days_per_week}</p>
                      <div class="job-ser">
                        <ul class="job-def">
                          <li>
                            Division:<span>{this.findDivision(item.division_id)}</span>
                          </li>
                          <li>
                            District:<span>{this.findDistrict(item.district_id)} </span>
                          </li>
                          <li>
                            Area: <span>{this.findArea(item.area_id)}</span>
                          </li>
                        </ul>

                      </div>

                    </div>

                    <div class="col-lg-3">
                      <div class="apply-btn-area">
                        <div class="text-center">
                          <Link to={"/jobdetails/" + item.id}>
                            <button
                              class="btn btn-outline-info apply-btn"
                              type="submit"
                            >

                              View Details


                              </button>
                          </Link>
                        </div>



                        <div class="text-center">
                          <form action="" onSubmit={(e) => this.applyHandler(e, item.id)}>
                            <button
                              class="btn btn-outline-info apply-btn"
                              type="submit"
                            >
                              Apply
                          </button>
                          </form>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              ))}


            </div>
          </div>
        </section>
        <section className="">
          <div className="container">
            <div class="category-main-item">
              <div class="">
                <div class="category-items">
                  <div class="category-header text-center bg-new-color">
                    <h2>Premium Video Tutorial</h2>
                  </div>
                  <div class="category-wrapper row">
                    {this.props.popular.tutorials && this.props.popular.tutorials.map(tut => (
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
                                {/* <p> {this.getCategory(tut.category_id)}</p> */}
                                {/* <span>{this.getSubCategory(tut.sub_category_id)}</span> */}
                              </div>
                            </div>

                            <div class="product-content-button">
                              <Link
                                to="/get_tutorial/details"
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
        </section>
        <section class="our-feature section-padding">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 float-right">
                <h2>How it works</h2>
                <div class="mark-text">
                  Guardian can find tutors, buy video tutorial, also buy text book{" "}
                </div>
                <p>
                  Tutors find tuitions and sell tutorial easily with this platform
                </p>
                <a
                  href="#"
                  class="wow fadeInUp  theme-solid-button theme-button animated"
                >
                  Know more future
                </a>
              </div>
              <div class="col-md-6 col-xs-12">
                <img src={Shape1} alt="name" />
              </div>
            </div>
          </div>
        </section>
        <div class="our-feature-course-one section-margin-top">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="feature-block">
                  <div class="wrapper">
                    <div class="icon">
                      <i class="fas fa-book" />
                    </div>
                    <h5>
                      <a href="course-details.html">Find Tuition/Tutor Easily</a>
                      <p>There are many books in our store. You can buy from your home</p>
                    </h5>

                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6 col-xs-12">
                <div class="feature-block">
                  <div class="wrapper">
                    <div class="icon">
                      <i class="fas fa-book-open" />
                    </div>
                    <h5>
                      <a href="course-details.html">Buy Text Book with Hassele Free</a>
                      <p>There are many books in our store. You can buy from your home</p>
                    </h5>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4 hidden-sm col-xs-12">
                <div class="feature-block">
                  <div class="wrapper">
                    <div class="icon">
                      <i class="fas fa-pen-square" />
                    </div>
                    <h5>
                      <a href="course-details.html">Buy Premium Quality Tutorial</a>
                      <p>You will get several category tutorial like programming, skill development, education, design. </p>
                    </h5>
                    <p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
const mapPropsToState = state => {
  return {
    popular: state.popular.popular,
    com: state.comm.commonSync,
  }
}
export default connect(mapPropsToState)(Home);
