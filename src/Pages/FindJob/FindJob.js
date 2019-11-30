import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "./FindJob.css";
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import axios from "axios"
class FindJob extends Component {
  state = {
    filterJob: null,
    secondFilterJob: null
  };

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

    let filterJob = this.props.tuitions.filter(tt => tt.division_id == val)
    this.setState({
      filterJob
    })
    console.log(filterJob)
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
    let filterJob = this.props.tuitions.filter(tt => tt.district_id == val)
    this.setState({
      filterJob
    })
  }

  areaHandler = e => {
    let val = e.target.value;
    let filterJob = this.props.tuitions.filter(tt => tt.area_id == val)
    this.setState({
      filterJob
    })
  }
  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  applyHandler = (e, id) => {
    e.preventDefault()
    let data = {
      authentication: "Tuition.app",
      api_token: this.props.auth.api_token,
      tuition_id: id
    }
    axios.post("http://anytuition.com/anytuition/public/api/v1/tuitions/apply", data).then(data => {
      console.log(data)
    })
  }

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
    if (this.state.filterJob) {
      console.log("asdf")
      let newTuitions = this.state.filterJob.filter(fj => fj.medium_id == val)
      this.setState({
        secondFilterJob: newTuitions
      })
      return
    }
    let filterJob = this.props.tuitions.filter(tt => tt.medium_id == val)
    this.setState({
      filterJob
    })
  }
  genderHandler = val => {
    if (this.state.filterJob && this.state.filterJob.length > 0) {
      let newTuitions = this.state.filterJob.filter(fj => fj.gender_priority == val)
      this.setState({
        filterJob: newTuitions
      })
      return
    }
    let filterJob = this.props.tuitions.filter(tt => tt.gender_priority == val)
    this.setState({
      filterJob
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
    console.log(this.props.tuitions)
    return (
      <main>
        <section className="job-find-section ">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="4">
                <div className="sidebar z-depth-1">
                  <div className="sidebar-title">
                    <h3 class="panel-heading">Tuition search</h3>
                  </div>
                  <div className="sidebar-body">
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
                        <option>Select</option>
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
                      <select class="custom-select" id="inputGroupSelect01" name="area" onChange={this.areaHandler}>
                        <option selected>Select:</option>
                        {this.state.areas && this.state.areas.map(ds => {
                          console.log(ds)
                          return (
                            <option value={ds.id}>{ds.title}</option>
                          )
                        })}
                      </select>
                    </div>

                    <div className="btn-area-tutor find-job-button-area">
                      <button className="btn btn-success" onClick={() => this.genderHandler("Male")}>Male</button>
                      <button className="btn btn-success" onClick={() => this.genderHandler("Female")}>Female</button>
                    </div>

                    <div class="form-group">
                      <div className="find-tuition-title text-center bg-new-color" >
                        <h4>Select Category</h4>
                      </div>
                      <div>

                        {mediums && mediums.map((mm, i) => {
                          console.log(mm)
                          return (
                            // <div class="styled-input-single">
                            //   <input
                            //     type="radio"
                            //     class="category styled"
                            //     id={"customRadio" + i}
                            //     name="category"
                            //     value={mm.id}
                            //     onChange={this.mediumChange}
                            //   />{" "}
                            //   <label for={"customRadio" + i} >
                            //     {mm.title}
                            //   </label>
                            // </div>
                            <div class="custom-control custom-radio custom-control-inline w-100">
                              <input type="radio" id={"customRadio" + i} name="category" class="custom-control-input" value={mm.id} onChange={this.mediumChange} />
                              <label class="custom-control-label" for={"customRadio" + i} >{mm.title}</label>
                            </div>
                          )
                        })}





                      </div>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="8">
                <div className={this.state.filterJob ? "d-none" : "d"}>

                  {this.props.tuitions && this.props.tuitions.map(item => (
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
                          <ul className="d-flex justify-content-between info-find-job">
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

                            {/* <div class="text-center">
                              <button
                                class="btn btn-outline-info apply-btn"
                                type="submit"
                              >
                                Available
                          </button>
                            </div> */}

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
                <div className={this.state.secondFilterJob ? "d-none" : "d"}>

                  {this.state.filterJob && this.state.filterJob.map(item => (
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
                          <ul className="d-flex justify-content-between info-find-job">
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

                <div className={!this.state.secondFilterJob && !this.state.filterJob ? "d-none" : "d"}>

                  {this.state.secondFilterJob && this.state.secondFilterJob.map(item => (
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
                          <ul className="info-find-job d-flex justify-content-between">
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
                              <button
                                class="btn btn-outline-info apply-btn"
                                type="submit"
                              >
                                Available
                          </button>
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

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    tuitions: state.study.tuitions,
    auth: state.auth.user,
    com: state.comm.commonSync,
    error: state.error,
  };
};
export default connect(mapStateToProps)(FindJob);
