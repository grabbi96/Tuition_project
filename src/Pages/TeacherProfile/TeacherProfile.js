import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TeacherProfile.css";
import Profile from "../../assets/images/profile.png";
import { ToastContainer, toast } from "react-toastify";
import { setToastMessage } from "../../store/actions/metaActions";
import { connect } from "react-redux";
import Axios from "axios";
import store from "../../store/index"
import { fatchAllData } from "../../store/actions/category"
import jsPDF from "jspdf"
import { renderToString } from "react-dom/server";


import axios from 'axios'

class TeacherProfile extends Component {
  state = {};

  componentDidMount() {
    if (this.props.meta.toastMessage) {
      toast.success(this.props.meta.toastMessage, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => this.props.setToastMessage()
      });
    }



  }
  download = event => {
    event.preventDefault()
    window.print()
  }

  deleteEdu = (id) => {
    let data = {
      authentication: "Tuition.app",
      api_token: this.props.auth.api_token,
      id
    }
    Axios.post("http://anytuition.com/anytuition/public/api/v1/educations/delete", data).then(data => {
      store.dispatch(fatchAllData())
    })
  }
  deleteEx = (id) => {
    let data = {
      authentication: "Tuition.app",
      api_token: this.props.auth.api_token,
      id
    }
    Axios.post("http://anytuition.com/anytuition/public/api/v1/experiences/delete", data).then(data => {
      store.dispatch(fatchAllData())
    })
  }
  addPopular = (event, id) => {
    event.preventDefault()
    let data = {
      authentication: 'Tuition.app',
      popular_offer_id: this.props.popularOffer[0].id,
      popular_type_id: id,
      api_token: this.props.auth.api_token,
      type: '3'
    }
    axios.post('http://anytuition.com/anytuition/public/api/v1/populars/add', data)
      .then(result => {
        console.log(result.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    let { dob, email, father_name, professional_certificate, extra_activities, aboutme, career_objective, area_of_interest, special_qualification, gender, image, mobile, birth, mother_name, name, nationality, nid, note, permanent_address, present_address, religion, status } = this.props.auth


    console.log(this.props.ex)


    let educations = this.props.edu.map(item => {
      return (
        <tr className="">
          {/* <a className="close-edu" onClick={() => this.deleteEdu(item.id)}><i class="fas fa-times"></i> </a> */}

          <td className="">
            {/* <i class="fab fa-stack-overflow pr-1"></i> */}
            {item.exam_id == 1 && <strong> SSC </strong>}
            {item.exam_id == 2 && <strong> HSC </strong>}
            {item.exam_id == 3 && <strong> JSC </strong>}
            {item.exam_id == 4 && <strong> PSC </strong>}
            {item.exam_id == 5 && <strong> O Level </strong>}
            {item.exam_id == 6 && <strong> A Level </strong>}
            {item.exam_id == 7 && <strong> BCS </strong>}
            {item.exam_id == 8 && <strong> Alim </strong>}
            {item.exam_id == 9 && <strong> Dakhil </strong>}
            {item.exam_id == 10 && <strong> Honors </strong>}
            {item.exam_id == 11 && <strong> Masters </strong>}
            {item.exam_id == 12 && <strong> Job Exam </strong>}
            {item.exam_id == 13 && <strong> Versity Admission </strong>}
            {item.exam_id == 14 && <strong> Medical Preparetion </strong>}
          </td>
          <td className="">
            {item.group_id == 1 && <strong> Science </strong>}
            {item.group_id == 4 || item.group_id == 2 && <strong> Commerce </strong>}
            {item.group_id == 3 && <strong> Arts </strong>}
          </td>
          <td className=""> <strong>{item.institution}</strong>  </td>
          <td className="">  <strong>{item.department}</strong>  </td>
          <td className="">  <strong>{item.result}</strong>  </td>
          <td className=""> <strong>{item.year_of_passing}</strong>  </td>
          <td className=""> <strong>{item.duration}</strong>  </td>
        </tr>
      )
    })

    let experiences = this.props.ex.map(item => {
      console.log(item)
      return (
        <tr>
          {/* <a className="close-edu" onClick={() => this.deleteEx(item.id)}><i class="fas fa-times"></i> </a>s */}
          <td >  <strong>{item.company_name}</strong>  </td>
          <td> <strong>{item.company_business}</strong>  </td>
          <td > <strong>{item.company_location}</strong>  </td>
          <td > <strong>{item.designation}</strong>  </td>
          <td >  <strong>{item.department}</strong>  </td>
          <td> <strong>{item.responsibilities}</strong>  </td>
          <td > <strong>{item.employment_start}</strong>  </td>
          <td > <strong>{item.employment_end}</strong>  </td>
        </tr>
      )
    })


    let trainings = this.props.train.map(train => {
      return (
        <tr>
          {/* <a className="close-edu" onClick={() => this.deleteEx(item.id)}><i class="fas fa-times"></i> </a>s */}
          <td >  <strong>{train.institution}</strong>  </td>
          <td> <strong>{train.topic}</strong>  </td>
          <td > <strong>{train.country}</strong>  </td>
          <td > <strong>{train.duration}</strong>  </td>
          <td >  <strong>{train.training_year}</strong>  </td>
          <td> <strong>{train.achievement}</strong>  </td>
          <td > <strong>{train.title}</strong>  </td>
        </tr>
      )
    })
    let tutorials;
    if (this.props.tutorials.tutorials) {
      tutorials = this.props.tutorials.tutorials.map(train => {
        console.log(train)
        return (
          <tr>
            {/* <a className="close-edu" onClick={() => this.deleteEx(item.id)}><i class="fas fa-times"></i> </a>s */}
            <td >  <strong>{train.title}</strong>  </td>
            <td> <strong>{train.description}</strong>  </td>
            <td > <strong>{train.amount}</strong>  </td>
            <td> <a href="" onClick={(e) => this.addPopular(e, train.id)} >Add</a>  </td>
          </tr>
        )
      })
    }

    console.log(this.props.tutorials)
    return (
      <section className="teacher-profile-section myDivToPrint" id="testdiv">
        <ToastContainer />
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <div class="udb">
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
                <div class="udb-sec udb-prof">
                  <div className="d-flex justify-content-between pro-pic align-items-center">
                    <h4>{name}</h4>


                    <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + image} alt="main" />
                  </div>

                  <a href="" onClick={this.download}>Print</a>
                  <p>
                    Career Objective
                  </p>
                  <div class="sdb-tabl-com sdb-pro-table">
                    <table class="responsive-table w-100">
                      <tbody>
                        <tr>
                          <td>Name</td>
                          <td>:</td>
                          <td>{name}</td>
                        </tr>

                        <tr>
                          <td>Father Name</td>
                          <td>:</td>
                          <td>{father_name}</td>
                        </tr>
                        <tr>
                          <td>Mother Name</td>
                          <td>:</td>
                          <td>{mother_name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>:</td>
                          <td>{email}</td>
                        </tr>

                        <tr>
                          <td>Mobile</td>
                          <td>:</td>
                          <td>{mobile}</td>
                        </tr>
                        <tr>
                          <td>Gender</td>
                          <td>:</td>
                          <td>{gender}</td>
                        </tr>
                        <tr>
                          <td>Date of birth</td>
                          <td>:</td>
                          <td>{birth}</td>
                        </tr>
                        <tr>
                          <td>Nationality</td>
                          <td>:</td>
                          <td>
                            {nationality}
                          </td>
                        </tr>
                        <tr>
                          <td>Permanent Address</td>
                          <td>:</td>
                          <td>
                            {permanent_address}
                          </td>
                        </tr>
                        <tr>
                          <td>Present Address</td>
                          <td>:</td>
                          <td>
                            {present_address}
                          </td>
                        </tr>
                        <tr>
                          <td>Nid</td>
                          <td>:</td>
                          <td>
                            {nid}
                          </td>
                        </tr>
                        <tr>
                          <td>Religion</td>
                          <td>:</td>
                          <td>
                            {religion}
                          </td>
                        </tr>
                        <tr>
                          <td>Religion</td>
                          <td>:</td>
                          <td>
                            {religion}
                          </td>
                        </tr>
                        <tr>
                          <td>Status</td>
                          <td>:</td>
                          <td>
                            <span class="db-done">Active</span>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>About me</h4>
                      </div>
                      <p>
                        {aboutme && aboutme}
                      </p>
                    </div>

                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>career objective</h4>
                      </div>
                      <p>
                        {career_objective && career_objective}
                      </p>
                    </div>

                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>area of interest</h4>
                      </div>
                      <p>
                        {area_of_interest && area_of_interest}
                      </p>
                    </div>


                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>special qualification</h4>
                      </div>
                      <p>
                        {special_qualification && special_qualification}
                      </p>
                    </div>

                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>professional certificate</h4>
                      </div>
                      <p>
                        {professional_certificate && professional_certificate}
                      </p>
                    </div>

                    <div className="profile-extra-info">
                      <div className="pei-header">
                        <h4>extra activities</h4>
                      </div>
                      <p>
                        {extra_activities && extra_activities}
                      </p>
                    </div>


                    <div className="section-padding-50">
                      <h4>Education</h4>
                      <div className="list-group">
                        <table className="table table-bordered text-center">
                          <thead>
                            <tr>
                              <th>Exam Title</th>
                              <th>Concentration/Major</th>
                              <th>Institute</th>
                              <th>Group</th>
                              <th>Result</th>
                              <th>Pas.Year</th>
                              <th>Duration</th>
                            </tr>
                          </thead>
                          <tbody>
                            {educations}
                          </tbody>
                        </table>

                      </div>
                    </div>



                    <h4>Working Experiences</h4>
                    <ul className="list-group">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th>Company Name</th>
                            <th>Company Business</th>
                            <th>Company Location</th>
                            <th>Designation</th>
                            <th>Department</th>
                            <th>responsibilities</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                          </tr>
                        </thead>
                        <tbody>
                          {experiences}
                        </tbody>
                      </table>
                    </ul>
                    <h4>Training</h4>
                    <ul className="list-group">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th>institution</th>
                            <th>topic</th>
                            <th>country</th>
                            <th>duration</th>
                            <th>training_year</th>
                            <th>achievement</th>
                            <th>title</th>
                          </tr>
                        </thead>
                        <tbody>
                          {trainings}
                        </tbody>
                      </table>
                    </ul>

                    <h4>Tutorials</h4>
                    <ul className="list-group">
                      <table className="table table-bordered text-center">
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Add</th>
                          </tr>
                        </thead>
                        <tbody>
                          {tutorials}
                        </tbody>
                      </table>
                    </ul>




                    <div class="sdb-bot-edit">
                      <p>
                        Powered By Anytuition
                      </p>

                    </div>
                  </div>
                </div>
              </div>


            </div>


          </div>
        </div >


      </section >
    );
  }
}

const mapStateToProps = state => {
  return {
    meta: state.meta,
    error: state.error,
    auth: state.auth.user,
    edu: state.edu.educations,
    ex: state.edu.experiences,
    train: state.edu.trainings,
    tutorials: state.edu.tutorialsList,
    popularOffer: state.popular.popularTable
  };
};
export default connect(
  mapStateToProps,
  { setToastMessage }
)(TeacherProfile);
