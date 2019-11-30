import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Profile from "../../assets/images/profile.png";
import "./GuardianProfile.css"
import { connect } from 'react-redux';
import axios from "axios"
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
import { fatchAllData, allFetchData } from '../../store/actions/category'
class GuardianProfile extends Component {
    state = {}

    deleteEx = (id) => {
        let data = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            id
        }
        axios.post("http://anytuition.com/anytuition/public/api/v1/tuitions/delete", data).then(data => {
            if (data.data.error < 1) {
                this.props.fatchAllData()
                this.props.allFetchData()
                this.toggle()
                this.setState({
                    successText: "Tuition Delete successfully"
                })
            } else {
                this.toggle()
                this.setState({
                    successTextRed: data.data.errorMsg
                })
            }
        })
    }
    addPopular = (event, id) => {
        event.preventDefault()
        let data = {
            authentication: 'Tuition.app',
            popular_offer_id: this.props.popularOffer[0].id,
            popular_type_id: id,
            api_token: this.props.auth.api_token,
            type: '2'
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/populars/add', data)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        console.log(this.props.adminTuitions)
        let educations = this.props.adminTuitions.map(item => {
            return (
                <tr className="">
                    <td className="">
                        {item.subjects}
                    </td>

                    <td className="">
                        {item.class_id}
                    </td>


                    <td className="">
                        {item.salary}
                    </td>

                    <td className="">
                        {item.days_per_week}
                    </td>

                    <td className="">
                        {item.facilities}
                    </td>

                    <td className="">
                        {item.joining_date}
                    </td>

                    <td className="">
                        {item.end_date}
                    </td>

                    <td className=""> <strong><a onClick={() => this.deleteEx(item.id)} className="red-text">Delete</a></strong>  </td>
                </tr>
            )
        })


        let educationsTwo = this.props.requestTuitions.map(item => {
            return (
                <tr className="">
                    <td className="">
                        {item.subjects}
                    </td>

                    <td className="">
                        {item.class_id}
                    </td>


                    <td className="">
                        {item.salary}
                    </td>

                    <td className="">
                        {item.days_per_week}
                    </td>

                    <td className="">
                        {item.facilities}
                    </td>

                    <td className="">
                        {item.joining_date}
                    </td>

                    <td className="">
                        {item.end_date}
                    </td>

                    <td className=""> <strong><a onClick={() => this.deleteEx(item.id)} className="red-text">Delete</a></strong>  </td>
                    <td> <a href="" onClick={(e) => this.addPopular(e, item.id)} >Add</a>  </td>
                    <td className=""> <strong><Link to={"/guardian_profile/tuition/" + item.id} className="red-text">Details</Link></strong>  </td>
                </tr>
            )
        })

        let { dob, email, father_name, gender, image, mobile, birth, mother_name, name, nationality, nid, note, permanent_address, present_address, religion, status } = this.props.auth
        return (
            <section>
                <div className="container">
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
                    <div className="profile-buttons d-flex ">
                        <Link to="/profile-setting" class="theme-line-button hhh">
                            <i class="fa fa-pencil" /> Edit Profile
                        </Link>
                        <Link to="/ask_for_tutor_all" class="theme-line-button hhh">
                            <i class="fa fa-pencil" /> Request for Teacher
                        </Link>
                        <Link to="/ask_for_tutor" class="theme-line-button hhh">
                            <i class="fa fa-pencil" /> Request for Teacher To Admin
                        </Link>
                    </div>
                    <div className="row">
                    
                        <div className="col-md-4">
                            <div className="profile-left">
                                
                                {/* <ul>
                                    <li>
                                        <h4>{name}</h4>
                                    </li>
                                </ul> */}
                                {/* <div class="sdb-bot-edit thth">

                                    <Link to="/profile-setting" class="theme-line-button">
                                        <i class="fa fa-pencil" />Edit Profile
                      </Link>
                                    <Link to="/ask_for_tutor_all" class="theme-line-button">
                                        <i class="fa fa-pencil" /> Request for Teacher
                      </Link>
                                    <Link to="/ask_for_tutor" class="theme-line-button">
                                        <i class="fa fa-pencil" /> Request for Teacher To Admin
                      </Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div class="udb udb-sec udb-prof">
                            <div className="row">
                                <div className="col-md-8">
                                <div class="">
                                    <h4> My Profile (guardian)</h4>

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

                                    </div>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + image} alt="main" />
                                </div>
                            </div>
                                
                            </div>
                            <div className="section-padding-50">
                                <h4>Admin Tuitions</h4>
                                <div className="list-group">
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th>salary</th>
                                                <th>days_per_week</th>
                                                <th>facilities</th>
                                                <th>joining_date</th>
                                                <th>end_date</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {educations}
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <div className="section-padding-50">
                                <h4>Tuitions</h4>
                                <div className="list-group">
                                    <table className="table table-bordered text-center">
                                        <thead>
                                            <tr>
                                                <th>Subject</th>
                                                <th>Class</th>
                                                <th>salary</th>
                                                <th>days_per_week</th>
                                                <th>facilities</th>
                                                <th>joining_date</th>
                                                <th>end_date</th>
                                                <th>Actions</th>
                                                <th>Add</th>
                                                <th>Details</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {educationsTwo}
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        adminTuitions: state.edu.adminTuitions,
        requestTuitions: state.edu.requestTuitions,
        auth: state.auth.user,
        popularOffer: state.popular.popularTable
    };
};
export default connect(mapStateToProps, { fatchAllData, allFetchData })(GuardianProfile);