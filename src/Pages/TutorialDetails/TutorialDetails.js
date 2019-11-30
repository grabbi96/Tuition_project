import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import "./TutorialDetails.css";
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBIcon,
  MDBInput,
  MDBBtn
} from 'mdbreact';
import axios from 'axios'
import TutorImage from "../../assets/images/technology1.jpg";
import 'react-accessible-accordion/dist/fancy-example.css';
import { fatchAllData, allFetchData } from "../../store/actions/category"
import Teacher from "../../assets/images/teacher.jpg"
class TutorialDetails extends Component {
  state = {
    collapseID: 'collapse0',
    videoLink: null,
    videoListShow: false,
    comment: "",
    rating: ''
  };
  videoHandler = val => {
    this.setState({
      videoLink: val,
      videoListShow: true
    })
    window.scrollTo({ top: 100, behavior: 'smooth' });
  }


  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  componentDidMount() {
    console.log(this.props.match.params.id)
  }
  getCategory = id => {
    if (this.props.category) {
      let dd = this.props.category.find(d => d.id == id)
      if (dd) {
        return dd.title
      }
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
  getAllSubItems = val => {
    console.log(this.props.tutorialSubItems)
    let filters = this.props.tutorialSubItems.filter(ts => ts.tutorial_item_id == val)
    if (filters) {
      return filters.map(fl => (
        <div className="video-list my-profile position-relative" onClick={() => this.videoHandler(fl.youtube)}>
          <h4>{fl.title}</h4>
          <i class="fas fa-play-circle"></i>
        </div>
      ))


    }
  }
  commentHandler = e => {
    e.preventDefault()
    let formData = {
      authentication: "Tuition.app",
      api_token: this.props.auth.api_token,
      review: this.state.comment,
      rating: this.state.rating,
      tutorial_id: this.props.match.params.id,
      status: "1"
    }
    axios.post('http://anytuition.com/anytuition/public/api/v1/tutorialreviews/add', formData)
      .then(result => {
        console.log(result)
        this.props.fatchAllData()
        this.props.allFetchData()


      })
      .catch(err => {
        console.log(err)
      })
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  render() {
    let tutorial;
    if (this.props.tutorials) {
      tutorial = this.props.tutorials.find(tt => tt.id == this.props.match.params.id)
    }
    let links;
    if (tutorial) {

      links = this.props.tutorialItems.filter(tl => tl.tutorial_id == tutorial.id)
    }
    let filterTutorials;
    if (this.props.tutorials) {
      let subTutorial = this.props.tutorials.filter(ttt => ttt.sub_category_id != tutorial.sub_category_id)
      filterTutorials = subTutorial.slice(0, 2)
    }
    let review;
    if (this.props.review) {
      review = this.props.review.filter(rv => rv.tutorial_id == this.props.match.params.id)
    }
    let tutor;
    let skills = []
    if (tutorial) {
      tutor = tutorial.skills.split(",")
      tutor.map(tds => {
        let skill = this.props.skills.find(sk => sk.id == tds)
        skills.push(skill)
      })
    }
    console.log(skills)
    return (
      <main>
        {/* <section class="tutorial-banner-section">
          <div class="container">
            <div class="row">
              <div class="tutorial-banner-content">
                <img
                  src="http://www.bengalsoftware.com/assets/images/turial11.png"
                  alt=""
                />
                <h2>Author Name</h2>
              </div>
            </div>
          </div>
        </section> */}
        <section className="tutorial-tab-section">
          <div className="container">
            <div className="tutorial-tab row">

              <div className="col-lg-8">

                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="main-video-item w-100">
                    {tutorial &&
                      this.state.videoListShow && (


                        <iframe
                          width="854"
                          height="480"
                          src={this.state.videoLink}
                          frameborder="0"
                          allow="autoplay; encrypted-media"
                          allowfullscreen=""
                        />



                      )

                    }
                  </div>
                  <div className="w-100">
                    {this.state.videoListShow && links && links.map((lk, i) => (
                      <MDBCard>

                        <MDBCollapseHeader
                          onClick={this.toggleCollapse('collapse' + i)}
                          tag='h3'
                          tagClassName='red-text d-flex justify-content-between align-items-center'
                        >
                          {lk.title}
                          <MDBIcon
                            icon={
                              this.state.collapseID === 'collapse' + i
                                ? 'angle-up'
                                : 'angle-down'
                            }
                            className='red-text'
                            size='2x'
                          />
                        </MDBCollapseHeader>
                        <MDBCollapse id={'collapse' + i} isOpen={this.state.collapseID}>
                          <MDBCardBody class='pt-0'>
                            {this.getAllSubItems(lk.id)}
                          </MDBCardBody>
                        </MDBCollapse>
                      </MDBCard>
                    )
                    )}
                    <p>

                    </p>
                  </div>
                  <div class="learning-info">
                    <h2>What Will I Learn?</h2>
                    <div class="learning-item">
                      {tutorial && tutorial.description}
                      {/* <div class="see-more">
                        <a href="">see more</a>
                      </div> */}
                      {/*                  
                      <ul>
                        <li>
                          <i class="fas fa-check" />
                          Master Machine Learning on Python &amp; R
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Have a great intuition of many Machine Learning models
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Make accurate predictions
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Make powerful analysis
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Make robust Machine Learning models
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Create strong added value to your business
                        </li>
                      </ul>
                 
                  */}

                    </div>

                    {/* <div class="learning-item">
                      <ul>
                        <li>
                          <i class="fas fa-check" />
                          Use Machine Learning for personal purpose
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Handle specific topics like Reinforcement Learning,
                          NLP and Deep Learning
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Handle advanced techniques like Dimensionality
                          Reduction
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Know which Machine Learning model to choose for each
                          type of problem
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          Build an army of powerful Machine Learning models and
                          know how to combine them{" "}
                        </li>
                        <li>
                          <i class="fas fa-check" />
                          to solve any problem
                        </li>
                      </ul>
                    </div> */}





                  </div>

                </div>





                <MDBContainer
                  className='accordion md-accordion accordion-3 z-depth-1-half'
                >
                  <h2 class='text-center text-uppercase py-4 px-3'>
                    {tutorial && tutorial.title}!
                  </h2>
                  {tutorial && (
                    <div className="d-flex justify-content-between">
                      <p><span className="text-bold">Category:</span>  {this.getCategory(tutorial.category_id)}</p>
                      <p> <span className="text-bold">Sub Category:</span> {this.getSubCategory(tutorial.sub_category_id)}</p>
                    </div>
                  )}

                  <hr class='mb-0' />
                  {links && links.map((lk, i) => (
                    <MDBCard>

                      <MDBCollapseHeader
                        onClick={this.toggleCollapse('collapse' + i)}
                        tag='h3'
                        tagClassName='d-flex justify-content-between align-items-center'
                      >
                        {lk.title}
                        <MDBIcon
                          icon={
                            this.state.collapseID === 'collapse' + i
                              ? 'angle-up'
                              : 'angle-down'
                          }
                          className='red-text'
                          size='2x'
                        />
                      </MDBCollapseHeader>
                      <MDBCollapse id={'collapse' + i} isOpen={this.state.collapseID}>
                        <MDBCardBody class='pt-0 '>
                          {this.getAllSubItems(lk.id)}
                        </MDBCardBody>
                      </MDBCollapse>
                    </MDBCard>
                  ))}



                </MDBContainer>
                <div className="d-block w-100 mt-4 text-center">
                  <Link to="/tutorial/order" class="theme-solid-button">
                    Order now
                              </Link>
                </div>
                <div className="comment-root">
                  <ul className="comment-lists">
                    {review && review.map(rv => (
                      <li>
                        <div className="root-comment">
                          <div className="user-info">
                            <div className="user-info-thumb">
                              <img src={Teacher} alt="teacher" />
                            </div>
                            <div className="user-info-content">
                              <span>1 minute age</span>
                              <h6>GOlam Rabbi</h6>
                            </div>
                          </div>
                          <div className="review-area">
                            {rv.rating == "1" && (
                              <ul className="star-list">
                                <li><i class="fas fa-star"></i></li>
                              </ul>
                            )}

                            {rv.rating == "2" && (
                              <ul className="star-list">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                              </ul>
                            )}
                            {rv.rating == "3" && (
                              <ul className="star-list">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                              </ul>
                            )}
                            {rv.rating == "4" && (
                              <ul className="star-list">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                              </ul>
                            )}
                            {rv.rating == "5" && (
                              <ul className="star-list">
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                                <li><i class="fas fa-star"></i></li>
                              </ul>
                            )}
                            <p>{rv.review}</p>
                          </div>
                        </div>
                      </li>
                    ))}

                  </ul>
                  <h4 className="mt-4">Comments</h4>
                  <form action="#" className="comment-form" onSubmit={this.commentHandler}>
                    <MDBInput
                      placeHolder="Write your comments here"
                      name="comment"
                      onChange={this.changeHandler}
                      value={this.state.comment}
                    />

                    <select class="custom-select" onChange={this.changeHandler} name="rating">
                      <option selected>Give a Review</option>
                      <option value="1">One star</option>
                      <option value="2">Two star</option>
                      <option value="3">Three star</option>
                      <option value="4">four star</option>
                      <option value="5">five star</option>
                    </select>
                    <MDBBtn className="success" type="submit">Submit</MDBBtn>
                  </form>
                </div>


              </div>
              <div class="col-lg-4">
                <div class="hire-profile">
                  <img
                    src="http://www.bengalsoftware.com/assets/images/dev/hire-person.jpg"
                    alt="imagescanner"
                  />

                  <span>Name: debeloper Name</span>
                  <p>litle description of developer</p>
                  <h5>service type :full time</h5>
                  <span class="hire-btn bg-color">hire me</span>
                  <ul class="social-link-list">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-linkedin-in" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <h4 className="m-auto"> Tutorial Features</h4>
                </div>

                <ul className="skills">
                  {skills && skills.map(sk => (
                    <li>{sk.title}</li>
                  ))}
                </ul>
                {/* <div class="porfolio-show">
                  <ul>
                    <li>
                      <a href="">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Porfolio link one
                        </button>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Porfolio link one
                        </button>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Porfolio link one
                        </button>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Porfolio link one
                        </button>
                      </a>
                    </li>

                    <li>
                      <a href="">
                        <button
                          type="button"
                          class="btn btn-primary btn-lg btn-block"
                        >
                          Porfolio link one
                        </button>
                      </a>
                    </li>
                  </ul>
                </div> */}

                {filterTutorials && filterTutorials.map(tut => (
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



                ))}
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
    tutorialItems: state.edu.tutorials.tutorial_items,
    tutorialSubItems: state.edu.tutorials.tutorial_item_details,
    auth: state.auth.user,
    review: state.edu.tutorials.tutorial_reviews,
    skills: state.study.skills
  };
};
export default connect(mapStateToProps, { fatchAllData, allFetchData })(TutorialDetails);
