import React, { Component } from "react";
import { MDBInput } from "mdbreact";
import "./AskForTutor.css";
import { connect } from "react-redux";
import axios from "axios"
import { withRouter } from "react-router-dom"
import { fatchAllData } from '../../store/actions/category'
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
    extra_activity: ""

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
      api_token: this.props.auth.api_token
    }
    axios.post('http://anytuition.com/anytuition/public/api/v1/admin/tuitions/add', data)
      .then(result => {
        this.props.history.push("/guardian_profile")
        this.props.fatchAllData()
      })




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
        <section className="askfortutor-section">
          <div className="container">
            <div className="aft-main">
              <div className="section-header">
                <h2>REQUEST A TUTOR</h2>
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
                      <option selected>Select:</option>
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

                  <MDBInput
                    type="text"
                    label="Extra Activity:"
                    name="extra_activity"
                    onChange={this.changeHandler}
                    value={this.state.extra_activity}
                    outline
                  />

                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input" />
                    <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
                  </div>
                  <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input" />
                    <label class="custom-control-label" for="customRadio2">Or toggle this other custom radio</label>
                  </div>


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
  };
};
export default connect(mapStateToProps, { fatchAllData })(withRouter(AskForTutor));
