import React, { Component } from "react";
import "./JobDetails.css";
import { connect } from "react-redux";
import axios from 'axios'
import Moment from "react-moment"
class JobDetails extends Component {
  state = {};
  // applyHandler = (e, id) => {
  //   e.preventDefault()
  //   console.log(id)

  //   let data = {
  //     authentication: "Tuition.app",
  //     api_token: this.props.auth.api_token,
  //     tuition_id: id
  //   }
  //   axios.post("http://anytuition.com/anytuition/public/api/v1/tuitions/apply", data).then(data => {
  //     console.log(data)
  //   })

  //   // this.props.fatchAllData()

  // }

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
  render() {

    let filter = this.props.tuitions.find(tt => tt.id == this.props.match.params.id)
    console.log(filter)
    let tutor;
    let skills = []
    if (filter) {
      if (filter.skills) {
        tutor = filter.skills.split(",")
        tutor.map(tds => {
          let skill = this.props.skills.find(sk => sk.id == tds)
          skills.push(skill)
        })
      }

    }
    console.log(skills)
    if (!filter) {
      return (
        <h2>Loading</h2>
      )
    }


    return (
      <main>
        <section class="work-details">
          <div class="container">
            <div class="row">
              {/* <div class="section-header">
                <h2> Details</h2>
                <h3></h3>
              </div> */}
              <div class="section-wrapper">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="work-details-left">
                      <div class="vacancy primary-bg">
                        <span class="text-center">
                          <h3>Work details</h3>
                        </span>
                      </div>
                      <div class="work-gp">
                        <div class="work-first">
                          <span>Job Description / Responsibility</span>
                          <p> {filter && filter.description}</p>
                          <ul>

                            <li>
                              <span>Published on:</span> {filter.updated_at}
                            </li>
                            <li>
                              <span>joining date:</span> {filter.joining_date}
                            </li>
                            <li>
                              <span>Vacancy:</span> 01
</li>
                            <li>
                              <span>Job Nature:</span>Full-time
</li>
                            <li>
                              <span>Per Day:</span> {filter.days_per_week}
                            </li>
                            <li>
                              <span>Job Location:</span>Dhaka
</li>
                            <li>
                              <span>Salary Range:</span> {filter.salary}
                            </li>
                            <li>
                              <span>Application Deadline:</span> {filter.end_date}
                            </li>
                          </ul>
                          {/* <ul class="job-info">
                            <li>{filter.description}</li>
                            <li>
                              Deep knowledge in architectural development,
                              design patterns and implementation of custom
                              developed solutions (and/or product integration
                              projects).
                            </li>
                            <li>
                              Understanding of object oriented software
                              development and technologies such as Java,
                              relational databases (i.e. Oracle, MY SQL Server),
                              Middleware Platforms (i.e. J2EE), Enterprise
                              Solution Packages (i.e. CMS, portals) and
                              development methods such as Agile, UML.
                            </li>
                            <li>
                              Strong on all common tiers of a web app (SQL, ORM,
                              REST-API, MVC, HTML, CSS)
                            </li>
                            <li>
                              Solid understanding of version control system
                            </li>
                            <li>
                              Must have experience with various web frameworks
                            </li>
                            <li>
                              Knowledge of product and package selection methods
                            </li>
                            <li>Good Knowledge of Software lifecycle</li>
                            <li>
                              Excellent communication, presentation and
                              facilitation skills
                            </li>
                          </ul> */}
                        </div>
                      </div>

                      <div class="work-bottom">
                        <h4>Skills and Expertise</h4>
                        <ul class="skills">
                          {skills.length > 0 && skills.map(sk => (
                            <li> <a href="#">{sk.title && sk.title}</a></li>
                          ))}

                        </ul>
                        <div className="text-center">
                          <a href="/" className="border-raius-less theme-solid-button mt-4" onClick={(e) => this.applyHandler(e, filter.id)}>Apply</a>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="job-summary">
                      <div class="job-sum-header primary-bg">
                        <h4>Guardian profile</h4>
                      </div>
                      <div class="job-sum-wrapper">
                        <ul>
                          <li>
                            Division:<span>{this.findDivision(filter.division_id)}</span>
                          </li>
                          <li>
                            District:<span>{this.findDistrict(filter.district_id)} </span>
                          </li>
                          <li>
                            Area: <span>{this.findArea(filter.area_id)}</span>
                          </li>
                          <li><span className="bold">Category :</span> {this.findMedium(filter.medium_id)}</li>
                          <li><span className="bold">Class :</span> {this.findClass(filter.class_id)}</li>
                          <li><span className="bold">Joining Date : </span>{filter.joining_date}</li>
                          {/* <li>
                            <span>Published on:</span>Apr 17, 2018
                          </li>
                          <li>
                            <span>Vacancy:</span> 01
                          </li>
                          <li>
                            <span>Job Nature:</span>Full-time
                          </li>
                          <li>
                            <span>Experience:</span> 2 to 4 year(s)
                          </li>
                          <li>
                            <span>Job Location:</span>Dhaka
                          </li>
                          <li>
                            <span>Salary Range:</span> Negotiable
                          </li>
                          <li>
                            <span>Application Deadline:</span> May 7, 2018
                          </li>
                          <li> Shortlist this job</li>
                          <li> Share by Email</li>
                          <li> Print this job</li>
                          <li>View all jobs of this company</li>
                          <li>Report this job</li> */}
                        </ul>

                      </div>

                      <div class="sub-job">

                        <ul class="social-link-list">
                          <li class="facebook">
                            <a href="">
                              <i class="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li class="twitter">
                            <a href="">
                              <i class="fab fa-twitter" />
                            </a>
                          </li>
                          <li class="linkedin">
                            <a href="">
                              <i class="fab fa-linkedin-in" />
                            </a>
                          </li>
                          <li class="google">
                            <a href="">
                              <i class="fab fa-google-plus-g" />
                            </a>
                          </li>
                          <li class="youtube ">
                            <a href="">
                              <i class="fab fa-youtube" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="client-profile" />
                  </div>
                  <div class="col-lg-12">
                    <div class="row">
                      {/* <div class="col-lg-12">
                        <div class="job-summary">
                          <div class="job-sum-header primary-bg">
                            <h4>work-summary</h4>
                          </div>
                          <div class="job-sum-wrapper">
                            
                          </div>
                        </div>
                      </div> */}
                      <div class="col-lg-12">
                        <div class="sub-job">
                          {/* <a href="submit-proposal.php" onClick={(e) => this.applyHandler(e, filter.id)}>Submit a proposal</a> */}
                        </div>
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
    tuitions: state.study.tuitions,
    auth: state.auth.user,
    com: state.comm.commonSync,
    skills: state.study.skills
  };
};
export default connect(mapStateToProps)(JobDetails);
