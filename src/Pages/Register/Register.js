import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./Register.css";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  render() {
    return (
      <section className="register-landing section-padding text-center">
        <MDBContainer>
          <h2>Register</h2>
          <div className="register-btn-area">
            <Link to="register/hire_tutor" className="btn theme-line-button">
              <i class="fas fa-user-plus" /> Find Tutors
            </Link>
            <h2>Or</h2>
            <Link to="register/become_tutor" className="btn theme-line-button">
              <i class="fas fa-sign-in-alt" /> Become A Tutor
            </Link>
          </div>
        </MDBContainer>
      </section>
    );
  }
}

export default Register;
