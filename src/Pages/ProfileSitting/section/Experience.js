import React, { Component } from 'react';

import { Button, Tab, Tabs, Form } from "react-bootstrap";
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
    MDBBadge
} from "mdbreact";
import { connect } from 'react-redux'
import axios from 'axios'
import store from "../../../store/index"
import { fatchAllData } from "../../../store/actions/category"

class Experience extends Component {
    state = {
        companyBusiness: "",
        company: "",
        companyLocation: "",
        year: "",
        designation: "",
        department: "",
        responsibilities: "",
        employmentStart: "",
        employmentEnd: ""
    }
    deleteEx = (id) => {
        let data = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            id
        }
        axios.post("http://anytuition.com/anytuition/public/api/v1/experiences/delete", data).then(data => {
            store.dispatch(fatchAllData())
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)

    }

    sSubmitHandler = event => {
        event.preventDefault()
        let data = {
            authentication: 'Tuition.app',
            status: '1',
            company_name: this.state.company,
            company_business: this.state.companyBusiness,
            company_location: this.state.companyLocation,
            year_of_passing: this.state.year,
            designation: this.state.designation,
            department: this.state.department,
            responsibilities: this.state.responsibilities,
            employment_start: this.state.employmentStart,
            employmwnt_end: this.state.employmentEnd,
            api_token: this.props.auth.api_token
        }
        console.log(data)
        axios.post('http://anytuition.com/anytuition/public/api/v1/experiences/add', data)
            .then(result => {
                store.dispatch(fatchAllData())
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
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
                    <td className=""> <strong><a onClick={() => this.deleteEx(item.id)} className="red-text">Delete</a></strong>  </td>
                </tr>
            )
        })
        return (
            <div className="accademic-sitting">
                <h2 className="text-center">Experiences</h2>
                <MDBCard>
                    <MDBCardBody>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {experiences}
                            </tbody>
                        </table>
                    </MDBCardBody>
                </MDBCard>
                <h2 className="text-center">Experiences</h2>
                <MDBCard className="input-ffrm">
                    <MDBCardBody>
                        
                        <form onSubmit={this.sSubmitHandler}>

                            <div className="grey-text">
                                <MDBInput label="Company Name:" outline name='company' value={this.state.company} onChange={this.changeHandler} />
                                <MDBInput label="Company Business:" outline name='companyBusiness' value={this.state.companyBusiness} onChange={this.changeHandler} />
                                <MDBInput label="Company Location" outline name='companyLocation' value={this.state.companyLocation} onChange={this.changeHandler} />
                                <MDBInput label="Year of passing" outline name='year' value={this.state.year} onChange={this.changeHandler} />
                                <MDBInput label="Designation" outline name='designation' value={this.state.designation} onChange={this.changeHandler} />
                                <MDBInput label="department" outline name='department' value={this.state.department} onChange={this.changeHandler} />
                                <MDBInput label="responsibilities" outline name='responsibilities' value={this.state.responsibilities} onChange={this.changeHandler} />
                                <MDBInput label="from" outline type="date" name='employmentStart' value={this.state.employmentStart} onChange={this.changeHandler} />
                                <MDBInput label="To" outline type="date" name='employmentEnd' value={this.state.employmentEnd} onChange={this.changeHandler} />
                            </div>

                            <div className="mt-4 text-center">
                                <a
                                    color="light-blue"
                                    className="mb-3 theme-line-button"
                                    type="submit"
                                >
                                    submit
                          </a>
                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading,
        auth: state.auth.user,
        ex: state.edu.experiences
    }
}

export default connect(mapStateToProps)(Experience);