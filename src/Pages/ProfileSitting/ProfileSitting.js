import React, { Component } from "react";
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
import Information from "./section/Information"
import Education from "./section/Education"
import Experience from "./section/Experience"
import Quiz from "./section/Quiz"
import Training from "./section/Training"
import Password from "./section/Password"
import Applied from "./section/Applied"
import ShowProfile from "./section/ShowProfile"
import AddTutor from "./section/AddTutor"
import AppliedTuition from "../EmailResume/EmailResume"
import "./ProfileSitting.css";
class ProfileSitting extends Component {
  state = {};

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
      <main>
        <section className="profile-sitting-section">
          <div className="container new-teacher-sitting">
            <Tabs defaultActiveKey="contact" id="uncontrolled-tab-example">
            <Tab eventKey="contact" title="Personal Information">

<Information />
</Tab>
              <Tab eventKey="Accademic" title="Accademic Related Information">
                <Education />
              </Tab>
              <Tab eventKey="home" title="Experience">
                <Experience />
              </Tab>
              <Tab eventKey="training" title="Training">
                <Training />
              </Tab>
              <Tab eventKey="profile" title="My Photo">
                <div class="col-lg-8 forbg">
                  <label for="user_profile_updater_profile_image">Upload a new picture:</label>
                  <i class="fas fa-cloud-upload-alt"></i>
                  <input type="file" name="user_profile_updater[profile_image]" id="user_profile_updater_profile_image" />
                </div>
              </Tab>
             
              <Tab eventKey="information" title="Add Tutor">
                <AddTutor />
              </Tab>

              <Tab eventKey="password" title="Password">
                <Password />
              </Tab>
              <Tab eventKey="Test" title="Quiz Test For Rating">
                <Quiz />
              </Tab>
              <Tab eventKey="Payment" title="Applied">
                <Applied />
              </Tab>
              <Tab eventKey="pro" title="Show Profile In Home Page">
                <ShowProfile />
              </Tab>
              <Tab eventKey="applied" title="Applied tuitions">
                <AppliedTuition />
              </Tab>
            </Tabs>
          </div>
        </section>
      </main>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error,
    isloading: state.meta.isLoading
  }
}
export default connect(mapStateToProps)(ProfileSitting);
