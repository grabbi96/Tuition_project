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

class Training extends Component {
    state = {
        institution: "",
        topic: "",
        country: "",
        duration: "",
        training_year: "",
        achievement: "",
        title: ""
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)

    }

    sSubmitHandler = event => {
        event.preventDefault()
        let { institution, topic, country, duration, training_year, achievement, title } = this.state
        let data = {
            authentication: 'Tuition.app',
            status: '1',
            institution,
            topic,
            country,
            duration,
            training_year,
            achievement,
            title,
            api_token: this.props.auth.api_token
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/trainings/add', data)
            .then(result => {
                store.dispatch(fatchAllData())
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div className="accademic-sitting">
                <h2 className="text-center">Trainings</h2>
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
                                {/* {experiences} */}
                            </tbody>
                        </table>
                    </MDBCardBody>
                </MDBCard>
                <h2 className="text-center">Trainings</h2>
                <MDBCard className="input-ffrm">
                    <MDBCardBody>
                        
                        <form onSubmit={this.sSubmitHandler}>

                            <div className="grey-text">
                                <MDBInput label="topic" outline name='topic' value={this.state.topic} onChange={this.changeHandler} />
                                <MDBInput label="institution:" outline name='institution' value={this.state.institution} onChange={this.changeHandler} />
                                <MDBInput label="country" outline name='country' value={this.state.country} onChange={this.changeHandler} />
                                <MDBInput label="duration" outline name='duration' value={this.state.duration} onChange={this.changeHandler} />
                                <MDBInput label="training_year" outline name='training_year' value={this.state.training_year} onChange={this.changeHandler} />
                                <MDBInput label="achievement" outline name='achievement' value={this.state.achievement} onChange={this.changeHandler} />
                                <MDBInput label="title" outline name='title' value={this.state.title} onChange={this.changeHandler} />
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
        edu: state.edu.educations,
    }
}
export default connect(mapStateToProps)(Training);