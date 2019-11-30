import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,

  MDBModal, MDBModalBody, MDBModalHeader
} from "mdbreact";
import "./AskForTutorAll.css";
import { connect } from "react-redux";
import axios from "axios"
import { withRouter } from "react-router-dom"
import { fatchAllData, allFetchData } from '../../store/actions/category'
class AskForTutor extends Component {
  state = {
    divisions: [],
    districts: [],
    areas: [],
    division: "",
    district: "",
    area: "",
    medium_id: "",
    class_id: "",
    subjects: "",
    facilities: "",
    learnings: "",
    salary: "",
    days_per_week: "",
    extra_facilities: "",
    joining_date: "",
    end_date: "",
    extra_activity: "",
    gender: "",
    noOfStudent: "",
    available_time: "",
    tuition_email: "",
    teaching_time: "",
    education: "",
    experience_year: "",
    additional_experience: "",
    student_gender: "",
    bonus_benefit: "",
    publish_date: "",
    skills: [],
    modal: false,
    successText: "",
    successTextRed: ""
  };

  componentDidMount() {
    // this.setState({
    //   divisions: this.props.com.divisions
    // })
    // console.log(this.props.com)
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
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submitHandler = e => {
    e.preventDefault()

    let data = {
      authentication: 'Tuition.app',
      division_id: this.state.division,
      district_id: this.state.district,
      area_id: this.state.area ? this.state.area : "1",
      medium_id: this.state.medium_id,
      class_id: this.state.class_id,
      subjects: this.state.subjects,
      facilities: this.state.facilities,
      learnings: this.state.learnings,
      salary: this.state.salary,
      days_per_week: this.state.days_per_week,
      extra_facilities: this.state.extra_facilities,
      status: "1",
      joining_date: this.state.joining_date,
      end_date: this.state.end_date,
      api_token: this.props.auth.api_token,

      extra_activity: this.state.extra_activity,
      gender_priority: this.state.gender,
      no_of_student: this.state.no_of_student,
      available_time: this.state.available_time,
      tuition_email: this.state.tuition_email,
      teaching_time: this.state.teaching_time,
      education: this.state.education,
      experience_year: this.state.experience_year,
      additional_experience: this.state.additional_experience,
      student_gender: this.state.student_gender,
      bonus_benefit: this.state.bonus_benefit,
      publish_date: this.state.publish_date,
      skills: this.state.skills.join(","),

    }
    axios.post('http://anytuition.com/anytuition/public/api/v1/tuitions/add', data)
      .then(data => {
        // console.log(result)
        if (data.data.error < 1) {
          this.props.fatchAllData()
          this.props.allFetchData()
          this.toggle()
          this.setState({
            successText: "Profile Updated successfully"
          })
        } else {
          this.toggle()
          this.setState({
            successTextRed: data.data.errorMsg
          })
        }
      })




  }
  onChangeHandlerSkill = event => {
    this.setState({
      skills: this.state.skills.concat(event.target.value)
    })
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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
    console.log(divisions)
    return (
      <main>
        <section className="askfortutor-section section-padding">
          <MDBContainer>
            <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
              <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
              <MDBModalBody>
                {this.state.successText && (
                  <h2>{this.state.successText}</h2>
                )}
                {this.state.successTextRed && (
                  <h2 className="red-text">{this.state.successTextRed}</h2>
                )}
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
          <div className="container">
            <div className="aft-main">
              <div className="section-header">
                <h2>Tuition Post</h2>
              </div>
              <div className="section-wrapper">
                <form action="" onSubmit={this.submitHandler}>
                  {/* <MDBInput type="text" label="Full Name:" outline /> */}
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Division:
                      </label>

                    </div>

                    <select class="custom-select" id="inputGroupSelect01" onChange={this.divisionHandler}>
                      <option selected>Select Area:</option>
                      {divisions && divisions.map(dv => (
                        <option value={dv.id}>{dv.title}</option>
                      ))}

                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select District:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" onChange={this.districtHandler}>
                      <option selected>Select:</option>
                      {this.state.districts && this.state.districts.map(ds => {
                        return (
                          <option value={ds.id}>{ds.title}</option>
                        )
                      })}
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Area:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="area" onChange={this.changeHandler}>
                      <option selected>Select:</option>
                      {this.state.areas && this.state.areas.map(ds => {
                        console.log(ds)
                        return (
                          <option value={ds.id}>{ds.title}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Medium:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="medium_id" onChange={this.changeHandler}>
                      <option value=""> Select Medium </option>
                      {mediums && mediums.map(dv => (
                        <option value={dv.id}>{dv.title}</option>
                      ))}
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Class:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="class_id" onChange={this.changeHandler}>
                      <option selected>Select Class:</option>
                      {classes && classes.map(dv => (
                        <option value={dv.id}>{dv.title}</option>
                      ))}
                    </select>
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Subject:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="subjects" onChange={this.changeHandler}>
                      <option selected>Select Subject:</option>
                      {subjects && subjects.map(dv => (
                        <option value={dv.title}>{dv.title}</option>
                      ))}
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select facilities:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="facilities" onChange={this.changeHandler}>
                      <option selected>Select Subject:</option>
                      {facilities && facilities.map(dv => (
                        <option value={dv.title}>{dv.title}</option>
                      ))}
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01" name="learnings" onChange={this.changeHandler}>
                        Select learnings:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Select Subject:</option>
                      {learnings && learnings.map(dv => (
                        <option value={dv.title}>{dv.title}</option>
                      ))}
                    </select>
                  </div>

                  <MDBInput
                    type="text"
                    label="Salary:"
                    name="salary"
                    onChange={this.changeHandler}
                    value={this.state.salary}
                    outline
                  />



                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Days per week:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01" name="days_per_week" onChange={this.changeHandler}>
                      <option selected>Days per week:</option>
                      <option value="One">One</option>
                      <option value="Two">Two</option>
                      <option value="Three">Three</option>
                      <option value="Four">Four</option>
                      <option value="Five">Five</option>
                    </select>
                  </div>

                  <MDBInput
                    type="text"
                    label="Extra Facilities:"
                    name="extra_facilities"
                    onChange={this.changeHandler}
                    value={this.state.extra_facilities}
                    outline
                  />


                  <MDBInput
                    type="text"
                    label="Extra Activity:"
                    name="extra_activity"
                    onChange={this.changeHandler}
                    value={this.state.extra_activity}
                    outline
                  />
                  <div className="d-flex align-items-center">
                    <p className="mr-4 mb-0">Gender:</p>
                    <div className="d-flex align-items-center">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio3" name="gender" class="custom-control-input" value="Male" onChange={this.changeHandler} />
                        <label class="custom-control-label" for="customRadio3">Male</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio4" name="gender" class="custom-control-input" value="Female" onChange={this.changeHandler} />
                        <label class="custom-control-label" for="customRadio4">Femalte</label>
                      </div>
                    </div>
                  </div>



                  <MDBInput
                    type="text"
                    label="No of student"
                    name="noOfStudent"
                    onChange={this.changeHandler}
                    value={this.state.noOfStudent}
                    outline
                  />

                  <MDBInput
                    type="text"
                    label="available time"
                    name="available_time"
                    onChange={this.changeHandler}
                    value={this.state.available_time}
                    outline
                  />
                  <MDBInput
                    type="text"
                    label="tuition email"
                    name="tuition_email"
                    onChange={this.changeHandler}
                    value={this.state.tuition_email}
                    outline
                  />

                  <MDBInput
                    type="text"
                    label="teaching time"
                    name="teaching_time"
                    onChange={this.changeHandler}
                    value={this.state.teaching_time}
                    outline
                  />


                  <MDBInput
                    type="text"
                    label="education"
                    name="education"
                    onChange={this.changeHandler}
                    value={this.state.education}
                    outline
                  />
                  <MDBInput
                    type="text"
                    label="experience year"
                    name="experience_year"
                    onChange={this.changeHandler}
                    value={this.state.experience_year}
                    outline
                  />
                  <MDBInput
                    type="text"
                    label="additional experience"
                    name="additional_experience"
                    onChange={this.changeHandler}
                    value={this.state.additional_experience}
                    outline
                  />

                  <div className="d-flex align-items-center">
                    <p className="mr-4 mb-0">Student Gender:</p>
                    <div className="d-flex align-items-center">
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio1" name="student_gender" class="custom-control-input" value="Male" onChange={this.changeHandler} />
                        <label class="custom-control-label" for="customRadio1">Male</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input type="radio" id="customRadio2" name="student_gender" class="custom-control-input" value="Female" onChange={this.changeHandler} />
                        <label class="custom-control-label" for="customRadio2">Femalte</label>
                      </div>
                    </div>
                  </div>
                  <MDBInput
                    type="text"
                    label="bonus benefit"
                    name="bonus_benefit"
                    onChange={this.changeHandler}
                    value={this.state.bonus_benefit}
                    outline
                  />
                  <MDBInput
                    type="date"
                    name="publish_date"
                    onChange={this.changeHandler}
                    value={this.state.publish_date}
                    outline
                  />
                  <h6>skills</h6>
                  {this.props.skills && this.props.skills.map((sk, i) => (
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id={"customCheck1" + i} value={sk.id} onChange={this.onChangeHandlerSkill} />
                      <label class="custom-control-label" for={"customCheck1" + i}>{sk.title}</label>
                    </div>
                  ))}
                  <MDBInput
                    type="date"
                    name="joining_date"
                    onChange={this.changeHandler}
                    value={this.state.joining_date}
                    outline
                  />
                  <MDBInput
                    type="date"
                    name="end_date"
                    onChange={this.changeHandler}
                    value={this.state.end_date}
                    outline
                  />


                  {/* <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Gender of Student:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Gender of Student:</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Salary Range:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Salary Range:</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <label class="input-group-text" for="inputGroupSelect01">
                        Select Subject:
                      </label>
                    </div>
                    <select class="custom-select" id="inputGroupSelect01">
                      <option selected>Select Subject:</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <MDBInput type="textarea" label="Detail Address:" outline />
                  <MDBInput type="text" label="Mobile:" outline />
                  <MDBInput type="text" label="Email:" outline />
                  <MDBInput
                    type="textarea"
                    label="Additional Info in details (if multiple subjects mention here):"
                    rows="6"
                    outline
                  /> */}



                  <button type="submit" class="theme-solid-button sm">
                    Request Tutor
                  </button>
                </form>
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
    com: state.comm.commonSync,
    error: state.error,
    auth: state.auth.user,
    skills: state.study.skills
  };
};
export default connect(mapStateToProps, { fatchAllData, allFetchData })(withRouter(AskForTutor));
