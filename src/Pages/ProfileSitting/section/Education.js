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


class Education extends Component {
    state = {
        sGroup: "",
        sins: "",
        sResult: "",
        sGrade: "",
        sPass: "",
        sAchie: "",
        sdur: "",
        sdepart: "",
        sExam: ""
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)

    }
    deleteEx = (id) => {
        let data = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            id
        }
        axios.post("http://anytuition.com/anytuition/public/api/v1/educations/delete", data).then(data => {
            store.dispatch(fatchAllData())
        })
    }

    sSubmitHandler = event => {
        event.preventDefault()
        let data = {
            authentication: 'Tuition.app',
            status: '1',
            exam_id: this.state.sExam,
            group_id: this.state.sGroup,
            institution: this.state.sins,
            year_of_passing: this.state.sPass,
            duration: "",
            result: this.state.sResult,
            scale: this.state.sGrade,
            achievement: this.state.sAchie,
            department: this.state.sdepart,
            duration: this.state.sdur,
            api_token: this.props.auth.api_token
        }
        console.log(data)
        axios.post('http://anytuition.com/anytuition/public/api/v1/educations/add', data)
            .then(result => {
                console.log(result)
                store.dispatch(fatchAllData())
            })
    }

    render() {
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
                    <td className=""> <strong><a onClick={() => this.deleteEx(item.id)} className="red-text">Delete</a></strong>  </td>
                </tr>
            )
        })
        return (
            <div className="accademic-sitting">
                <h2 className="text-center">Academic Qualifications</h2>
                <MDBCard>
                    <MDBCardBody>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {educations}
                            </tbody>
                        </table>
                    </MDBCardBody>
                </MDBCard>
                <h2 className="text-center">Academic Information</h2>
                <MDBCard className="input-ffrm">
                    <MDBCardBody>
                        
                        <form onSubmit={this.sSubmitHandler}>
                            <div>
                                <label>Class </label>
                                <select className="browser-default custom-select" name="sExam" onChange={this.changeHandler}>

                                    <option value="1">SSC</option>
                                    <option value="2">HSC</option>
                                    <option value="3">JSC</option>
                                    <option value="4">PSC</option>
                                    <option value="5">O Level</option>
                                    <option value="6">A Level</option>
                                    <option value="7">BCS</option>
                                    <option value="8">Alim</option>
                                    <option value="9">Dakhil</option>
                                    <option value="10">Honors</option>
                                    <option value="11">Masters</option>
                                    <option value="12">Job Exam</option>
                                    <option value="13">Versity Admission</option>
                                    <option value="14">Medical Preparetion</option>
                                </select>
                            </div>
                            <div>
                                <label>Group</label>
                                <select className="browser-default custom-select" name="sGroup" onChange={this.changeHandler}>
                                    <option>Select</option>
                                    <option value="1">Arts</option>
                                    <option value="2">Commerce</option>
                                    <option value="3">Science</option>
                                </select>
                            </div>
                            <div className="grey-text">
                                <MDBInput label="Institute Name:" outline name='sins' value={this.state.sins} onChange={this.changeHandler} />
                                <MDBInput label="Department Name:" outline name='sdepart' value={this.state.sdepart} onChange={this.changeHandler} />
                                <MDBInput label="Duration" outline name='sdur' value={this.state.sdur} onChange={this.changeHandler} />
                                <MDBInput label="Result" outline name='sResult' value={this.state.sResult} onChange={this.changeHandler} />
                                <MDBInput label="Grade" outline name='sGrade' value={this.state.sGrade} onChange={this.changeHandler} />
                                <MDBInput label="Passing year" outline name='sPass' value={this.state.sPass} onChange={this.changeHandler} />
                                <MDBInput
                                    type="textarea"
                                    label="Achievement:"
                                    rows="3"
                                    outline
                                    name='sAchie' value={this.state.sAchie} onChange={this.changeHandler}
                                />
                            </div>

                            <div className="mt-4 text-center ">
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

export default connect(mapStateToProps)(Education);