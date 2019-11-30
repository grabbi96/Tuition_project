import React, { Component } from 'react';

import Profile from "../../assets/images/profile.png";
import Axios from 'axios';
import { connect } from 'react-redux';
import Spinner from "../../Components/Spinner"
import "./TutorDetails.css"
class TutorDetails extends Component {
    state = {
        profile: {}
    }

    componentDidMount() {
        let data = {
            authentication: "Tuition.app",
            id: this.props.match.params.id
        }
        Axios.post("http://anytuition.com/anytuition/public/api/v1/userinfo", data)
            .then(result => {
                this.setState({
                    profile: result.data.data
                })
            })
    }

    render() {

        if (!this.state.profile.users) {
            return (
                <Spinner />
            )
        }
        let educations;
        if (this.state.profile.education) {
            educations = this.state.profile.education.map(item => {
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
        }
        // console.log(this.props.profile)
        let experiences
        if (this.state.profile.experiences) {
            experiences = this.state.profile.experiences.map(item => {
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
        }
        let trainings
        if (this.state.profile.trainings) {
            trainings = this.state.profile.trainings.map(train => {
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
        }
        let tutor;
        let skills = []
        if (this.props.tutors) {
            tutor = this.props.tutors.find(tt => tt.id == this.props.match.params.id)
            if (tutor) {
                if (tutor.skills) {
                    tutor = tutor.skills.split(",")
                }

                tutor.map(tds => {
                    let skill = this.props.skills.find(sk => sk.id == tds)
                    skills.push(skill)
                })
            }
            // 
        }

        if (!this.state.profile.users) {

        }
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile-left">

                                {this.state.profile.users && this.state.profile.users.image && (
                                    <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + this.state.profile.users.image} alt="main" />
                                )}
                                {this.state.profile.users && !this.state.profile.users.image && (
                                    <img src={Profile} alt="asdf" />
                                )}
                                < ul >
                                    <li>
                                        <h4>{this.state.profile.users && this.state.profile.users.name}</h4>
                                    </li>
                                </ul>
                                <ul>
                                    <li>sunday saturday appointment</li>
                                    <li>sunday saturday appointment</li>
                                </ul>
                                <ul className="social-list">
                                    <li>
                                        <a href="">
                                            <i class="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div class="udb">
                                <div class="udb-sec udb-prof">
                                    <h4> My Profile</h4>
                                    <p>
                                        It is a long established fact that a reader will be
                  </p>
                                    <div class="sdb-tabl-com sdb-pro-table">
                                        <table class="responsive-table w-100">
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.name}</td>
                                                </tr>


                                                <tr>
                                                    <td>Email</td>
                                                    <td>:</td>
                                                    {/* <td>{email}</td> */}
                                                    <td>{this.state.profile.users && this.state.profile.users.email}</td>
                                                </tr>

                                                <tr>
                                                    <td>Mobile</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.mobile}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>:</td>
                                                    {/* <td>{gender}</td> */}
                                                    <td>{this.state.profile.users && this.state.profile.users.gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date of birth</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.birth}</td>
                                                    {/* <td>{dob}</td> */}
                                                </tr>
                                                <tr>
                                                    <td>Permanent Address</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.permanent_address}</td>
                                                    <td>
                                                        {/* {permanent_address} */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Present Address</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.present_address}</td>
                                                    <td>
                                                        {/* {present_address} */}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Religion</td>
                                                    <td>:</td>
                                                    <td>{this.state.profile.users && this.state.profile.users.religion}</td>
                                                    <td>
                                                        {/* {religion} */}
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
                                        <div className="section-padding-50">
                                            <h4>Skills</h4>
                                            <ul className="skills">
                                                {skills && skills.map(sk => (
                                                    <li>{sk.title}</li>
                                                ))}
                                            </ul>

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

                                            <h4>Experiences</h4>
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
                                        </div>


                                        {/* 
                                        <h4>Experiences</h4>
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
                                        </ul> */}




                                        <div class="sdb-bot-edit">
                                            <p>
                                                It is a long established fact that a reader will be
                                                distracted by the readable content of a page when
                                                looking at its layout. The point of using Lorem Ipsum is
                                                that.
                      </p>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </section >
        );
    }
}
const mapStateToProps = state => {
    return {
        tutors: state.tutor.activeTutor,
        error: state.error,
        tuitions: state.study.tuitions,
        auth: state.auth.user,
        com: state.comm.commonSync,
        institutions: state.study.institutions,
        skills: state.study.skills
    };
};
export default connect(mapStateToProps)(TutorDetails);    