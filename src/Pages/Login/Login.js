import React, { Component } from "react";

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
import { ToastContainer, toast } from "react-toastify";
import { setToastMessage } from "../../store/actions/metaActions";
import { connect } from "react-redux";
import { login } from "../../store/actions/authAction";
import { setUser } from "../../store/actions/authAction"
import "./Login.css";
import FacebookLogin from 'react-facebook-login';
import Axios from "axios"
class Login extends Component {
  state = {
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
      mobile: this.state.phoneNumber,
      password: this.state.password,
    }
    console.log(formData);
    this.props.login(formData, this.props.history);

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (JSON.stringify(nextProps.error) !== JSON.stringify(prevState.error)) {
      return {
        errors: nextProps.error
      }
    }
    return null
  }
  componentDidMount() {
    if (this.props.meta.toastMessage) {
      toast.success(this.props.meta.toastMessage, {
        position: toast.POSITION.TOP_RIGHT,
        onClose: () => this.props.setToastMessage()
      });
    }
  }

  render() {
    const responseFacebook = (response) => {
      console.log(response);
      let data = {
        authentication: 'Tuition.app',
        name: response.name,
        email: response.email,
        provider_id: response.id,
        provider: 'facebook'
      }
      console.log(data)
      Axios.post('http://anytuition.com/anytuition/public/api/v1/socialLogin', data)
        .then(result => {
          console.log(result.data)
          let data = result.data.data.users
          let strinUser = JSON.stringify(data)
          localStorage.setItem("auth_token", strinUser)
          this.props.setUser(data)
          // setToastMessage('Login successfully')
          this.props.history.push('/teacher_profile')
        })
    }
    return (
      <MDBContainer>
        <ToastContainer />
        <MDBRow>
          <MDBCol md="6" className="login-form">
            <MDBCard>
              <MDBCardBody>
                <MDBCardHeader className="form-header bg-new-color rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
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
                    <MDBInput
                      label="Type your Number"
                      icon="envelope"
                      onChange={this.changeHandler}
                      group
                      type="number"
                      validate
                      error="wrong"
                      name="phoneNumber"
                      success="right"
                    />
                    <MDBInput
                      label="Type your password"
                      onChange={this.changeHandler}
                      icon="lock"
                      group
                      type="password"
                      name="password"
                      validate
                    />
                  </div>

                  <div className="text-center mt-4">
                    <MDBBtn className="bg-new-color" type="submit">
                      Login
                    </MDBBtn>
                  </div>
                </form>
                <MDBModalFooter>
                  <div className="font-weight-light">
                    <p>Not a member? Sign Up</p>
                    <p>Forgot Password?</p>
                  </div>
                </MDBModalFooter>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}


const mapStateToProps = state => {
  return {
    meta: state.meta,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { setToastMessage, login, setUser }
)(Login);
