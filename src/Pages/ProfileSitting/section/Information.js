import React, { Component } from 'react';
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
import axios from "axios";
import store from "../../../store/index"
import { setUser } from "../../../store/actions/authAction"
import { connect } from 'react-redux'
import FileBase64 from 'react-file-base64';

class Information extends Component {
    state = {
        name: "",
        fatherName: "",
        motherName: "",
        mobile: "",
        email: "",
        gender: "",
        marriedStatus: "",
        religion: "",
        presentAddress: "",
        permanentAddress: "",
        nationality: "",
        nid: "",
        note: "",
        image: "",
        birth: "",
        aboutme: "",
        career_objective: "",
        area_of_interest: "",
        special_qualification: "",
        extra_activities: "",
        professional_certificate: "",
        skills: [],
        modal: false
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    componentDidMount() {
        console.log(this.props.auth)
        // let { name, birth, dob, email, mobile, religion, father_name, gender, mother_name, nationality, nid, note, permanent_address, present_address } = this.state.auth
        this.setState({
            name: this.props.auth.name,
            fatherName: this.props.auth.father_name,
            motherName: this.props.auth.mother_name,
            mobile: this.props.auth.mobile,
            email: this.props.auth.email,
            gender: this.props.auth.gender,
            religion: this.props.auth.religion,
            presentAddress: this.props.auth.present_address,
            permanentAddress: this.props.auth.permanent_address,
            nationality: this.props.auth.nationality,
            nid: this.props.auth.nid,
            note: this.props.auth.note,
            image: this.props.auth.image,
            birth: this.props.auth.birth,
            aboutme: this.props.auth.aboutme,
            career_objective: this.props.auth.career_objective,
            area_of_interest: this.props.auth.area_of_interest,
            special_qualification: this.props.auth.special_qualification,
            extra_activities: this.props.auth.extra_activities,
            professional_certificate: this.props.auth.professional_certificate,
        })
    }
    submitHandler = event => {
        event.preventDefault()
        let formData = {
            authentication: "Tuition.app",
            type: 1,
            name: this.state.name,
            email: this.state.email,
            father_name: this.state.fatherName,
            mother_name: this.state.motherName,
            mobile: this.state.mobile,
            email: this.state.email,
            gender: this.state.gender,
            married_status: this.state.marriedStatus,
            religion: this.state.religion,
            present_address: this.state.presentAddress,
            permanent_address: this.state.permanentAddress,
            nationality: this.state.nationality,
            nid: this.state.nid,
            note: this.state.note,
            api_token: this.props.auth.api_token,
            image: this.state.image,
            birth: this.state.birth,
            aboutme: this.state.aboutme,
            career_objective: this.state.career_objective,
            area_of_interest: this.state.area_of_interest,
            special_qualification: this.state.special_qualification,
            extra_activities: this.state.extra_activities,
            professional_certificate: this.state.professional_certificate,
        }
        let data = {
            authentication: "Tuition.app",
            type: 1,
            name: "name",
            division_id: "1",
            district_id: "2",
            areas: "1",
            institution_id: "1",
            gender: "1",
            media: "1",
            class: "1",
            subjects: "1",
            facilities: "1",
            learnings: "1",
            salary: "10000",
            days_per_week: "4 days",
            extra_facilities: "no",
            tuition_status: "1",
            id: this.props.auth.id,
            api_token: this.props.auth.api_token
        }
        // console.log(formData);


        // axios.defaults.headers.common['Authorization'] = this.props.auth.user.api_token
        // axios.defaults.headers.common['Authorization'] = "Bearer" + this.props.auth.user.api_token
        // console.log(axios.defaults.headers)
        axios.post("http://anytuition.com/anytuition/public/api/v1/updateProfile ", formData)
            .then(data => {
                // 
                if (data.data.error < 1) {
                    store.dispatch(setUser(data.data.data.users))
                    localStorage.setItem('auth_token', JSON.stringify(data.data.data.users))
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
                console.log(data)

            })
            .catch(err => {
                console.log(err.response)
            })
        // console.log()
        // this.props.hireRegistration(formData, this.props.history);

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
            return {
                errors: nextProps.error
            }
        }
        return null
    }
    photoHandler = event => {
        console.log(event.target.files)
        this.setState({
            image: event.target.files
        })
    }
    // Callback~
    getFiles(files) {
        console.log(files[0].base64)
        let image = files[0].base64.replace("data:image/jpeg;base64,", "")
        console.log(image)
        this.setState({ image: image })
    }
    render() {

        // console.log(this.props.auth.name)
        return (
            <div className="pi-section">
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
                <h2 className="text-center">
                    Personal Information Setting
                </h2>
                <form onSubmit={this.submitHandler}>
                    <div className="text-center">
                        <FileBase64
                            multiple={true}
                            onDone={this.getFiles.bind(this)} />
                    </div>

                    <MDBInput label="Name:" type="text" name="name" value={this.state.name} onChange={this.changeHandler} outline />
                    <MDBInput label="Email:" type="email" name="email" value={this.state.email} onChange={this.changeHandler} outline />
                    <MDBInput label="Father Name:" type="text" value={this.state.fatherName} name="fatherName" onChange={this.changeHandler} outline />
                    <MDBInput label="Mother Name:" type="text" value={this.state.motherName} name="motherName" onChange={this.changeHandler} outline />
                    {/* <MDBInput label="Email:" type="text" value={this.state.email} name="email" onChange={this.changeHandler} outline /> */}
                    <MDBInput label="Mobile:" type="text" value={this.state.mobile} name="mobile" onChange={this.changeHandler} outline />
                    <label for="validationTooltip01" className="mr-4">Gender</label>
                    <div class="custom-control custom-radio custom-control-inline">    {/* checked={this.state.gender === "Male" ? true : false} */}
                        <input type="radio" id="customRadioInline1" name="gender" class="custom-control-input" onChange={this.changeHandler} value="Male" checked={this.state.gender === "Male" ? true : false} />
                        <label class="custom-control-label" for="customRadioInline1">Male</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="customRadioInline2" name="gender" class="custom-control-input" onChange={this.changeHandler} value="Female" checked={this.state.gender === "Female" ? true : false} />
                        <label class="custom-control-label" for="customRadioInline2">Female</label>
                    </div>
                    <select class="custom-select">
                        <option selected>Marital Status:</option>
                        <option value="1">Married</option>
                        <option value="2">Unmarried</option>
                    </select>
                    <MDBInput label="Religion:" name="religion" value={this.state.religion} type="text" onChange={this.changeHandler} outline />
                    <MDBInput label="Present Address:" name="presentAddress" value={this.state.presentAddress} type="text" onChange={this.changeHandler} outline />
                    <MDBInput label="Nationality:" name="nationality" value={this.state.nationality} type="text" onChange={this.changeHandler} outline />
                    <MDBInput label="Permanent Address:" name="permanentAddress" value={this.state.permanentAddress} onChange={this.changeHandler} type="text" outline />
                    <MDBInput label="Nid:" type="text" name="nid" value={this.state.nid} onChange={this.changeHandler} outline />
                    <MDBInput label="Note:" type="text" name="note" value={this.state.note} onChange={this.changeHandler} outline />
                    <MDBInput label="Birth:" type="date" name="birth" value={this.state.birth} onChange={this.changeHandler} outline />
                    <MDBInput label="About me:" type="textarea" name="aboutme" value={this.state.aboutme} onChange={this.changeHandler} outline />
                    <MDBInput label="career_objective:" type="textarea" name="career_objective" value={this.state.career_objective} onChange={this.changeHandler} outline />
                    <MDBInput label="area_of_interest:" type="textarea" name="area_of_interest" value={this.state.area_of_interest} onChange={this.changeHandler} outline />
                    <MDBInput label="special_qualification:" type="textarea" name="special_qualification" value={this.state.special_qualification} onChange={this.changeHandler} outline />
                    <MDBInput label="extra_activities:" type="textarea" name="extra_activities" value={this.state.extra_activities} onChange={this.changeHandler} outline />
                    <MDBInput label="professional_certificate:" type="textarea" name="professional_certificate" value={this.state.professional_certificate} onChange={this.changeHandler} outline />
                    <button type="submit" class="wow fadeInLeft  theme-solid-button">Upload personal info</button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading,
        auth: state.auth.user
    }
}
export default connect(mapStateToProps)(Information);