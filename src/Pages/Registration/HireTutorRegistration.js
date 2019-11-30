import React, { Component } from 'react';
// import { MDBInput, MDBBtn } from 'mdbreact';
import { connect } from 'react-redux';
import { hireRegistration } from "../../store/actions/authAction";
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
    MDBInput
} from "mdbreact";
class TutorRegistration extends Component {
    state = {
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        errors: ""
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    submitHandler = event => {
        event.preventDefault()
        let formData = {
            authentication: "Tuition.app",
            type: 2,
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.phoneNumber,
            password: this.state.password,
        }
        console.log(formData);
        this.props.hireRegistration(formData, this.props.history);

    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
            return {
                errors: nextProps.error
            }
        }
        return null
    }

    render() {

        return (

            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6" className="login-form">
                        <MDBCard>
                            <MDBCardBody >
                                <MDBCardHeader className="form-header bg-new-color rounded">
                                    <h3 className="my-3">
                                        <MDBIcon icon="lock" /> Register:
                  </h3>
                                </MDBCardHeader>
                                {this.state.errors.errors && (
                                    <div className="alert alert-danger">
                                        <p>{this.state.errors.errors}</p>
                                    </div>
                                )}
                                <form onSubmit={this.submitHandler}>
                                    {/* <FacebookLogin
                    appId="2309087926073637"
                    autoLoad={true}
                    fields="name,email,picture"
                    // onClick={componentClicked}
                    callback={responseFacebook} /> */}
                                    <div className="grey-text">
                                        <MDBInput label="Name" name="name" value={this.state.name} onChange={this.changeHandler} outline />
                                        <MDBInput label="Email" name="email" value={this.state.email} onChange={this.changeHandler} outline />
                                        <MDBInput label="Phone Number" name="phoneNumber" value={this.state.phoneNumber} onChange={this.changeHandler} outline />
                                        <MDBInput label="Password" name="password" type="password" value={this.state.password} onChange={this.changeHandler} outline />
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn type="submit" onSubmit={this.submitHandler} className="bg-new-color">Submit</MDBBtn>
                                    </div>
                                </form>
                                <MDBModalFooter>
                                    {/* <div className="font-weight-light">
                                        <p>Not a member? Sign Up</p>
                                        <p>Forgot Password?</p>
                                    </div> */}
                                </MDBModalFooter>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            // <section className="section-padding">
            //     <div className="container">
            //         <div className="section-header">
            //             <h2>Tutor Sign Up</h2>
            //         </div>
            //         {this.state.errors.errors && (
            //             <div className="alert alert-danger">
            //                 <p>{this.state.errors.errors}</p>
            //             </div>
            //         )}

            //         <form onSubmit={this.submitHandler}>



            //         </form>

            //     </div>
            // </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading
    }
}

export default connect(mapStateToProps, { hireRegistration })(TutorRegistration);