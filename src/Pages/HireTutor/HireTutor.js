import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

class HireTutor extends React.Component {
  state = {
    address: "",
    formActivePanel1: 1,
    formActivePanel1Changed: false,
    progress: 15,
    imageUrl: []
  };
  swapFormActive = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true
    });
  };

  handleNextPrevClick = a => param => e => {
    this.setState({
      ["formActivePanel" + a]: param,
      ["formActivePanel" + a + "Changed"]: true,
      progress: 15 + 33 * (param - 1)
    });

    console.log(param);
  };

  handleSubmission = () => {
    alert("Form submitted!");
  };

  calculateAutofocus = a => {
    if (this.state["formActivePanel" + a + "Changed"]) {
      return true;
    }
  };
  formWizardClass = value => {
    if (value === this.state.formActivePanel1) {
      return ["form-wizard", "active"].join(" ");
    }
    if (value < this.state.formActivePanel1) {
      return ["form-wizard", "activated"].join(" ");
    }
    return "form-wizard";
  };
  render() {
    return (
      <section className="section-padding">
        <MDBContainer>
          <h2 className="text-center font-weight-bold pt-4 pb-5 mb-2">
            <strong>Registration form</strong>
          </h2>
          <form action="" method="post">
            <MDBRow>
              <div className="wizards">
                <div className="progressbar">
                  <div
                    className="progress-line"
                    style={{ width: this.state.progress + "%" }}
                  />
                </div>
                <div className={this.formWizardClass(1)}>
                  <div className="wizard-icon">
                    <i className="fa fa-address-card" aria-hidden="true" />
                  </div>
                  <p>Personal Information</p>
                </div>
                <div className={this.formWizardClass(2)}>
                  <div className="wizard-icon">
                    <i className="fa fa-info-circle" aria-hidden="true" />
                  </div>
                  <p>Education Information</p>
                </div>
                <div className={this.formWizardClass(3)}>
                  <div className="wizard-icon">
                    <i className="fa fa-upload" aria-hidden="true" />
                  </div>
                  <p>Details</p>
                </div>
                {/* <div className={this.formWizardClass(4)}>
                  <div className="wizard-icon">
                    <i className="fas fa-book-open" aria-hidden="true" />
                  </div>
                  <p>Description</p>
                </div>
                <div className={this.formWizardClass(5)}>
                  <div className="wizard-icon">
                    <i className="fa fa-check-circle" />
                  </div>
                  <p>Video &amp; Finish</p>
                </div> */}
              </div>
              {this.state.formActivePanel1 === 1 && (
                <MDBCol md="12" className="contribution-add-location">
                  <h2> Basic Information</h2>

                  <MDBInput label="Name" outline />
                  <MDBInput label="Email" outline />
                  <MDBInput label="Phone Number" outline />
                  <MDBInput label="Password" type="password" outline />
                  <MDBInput label="Confirm Password" type="password" outline />
                  <MDBInput label="Facebook Link" outline />
                  <MDBInput label="Twitter Link" outline />
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">
                        Gender
                      </legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                          />
                          <label class="form-check-label" for="gridRadios1">
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                          <label class="form-check-label" for="gridRadios2">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <MDBInput type="textarea" label="Address" rows="3" outline />
                  <MDBBtn
                    color="mdb-color"
                    rounded
                    className="float-right theme-solid-button"
                    onClick={this.handleNextPrevClick(1)(2)}
                  >
                    next
                  </MDBBtn>
                </MDBCol>
              )}

              {this.state.formActivePanel1 === 2 && (
                <MDBCol md="12" className="contribution-add-location">
                  <h2>Education Information</h2>
                  <select className="browser-default custom-select">
                    <option>Select Class</option>
                    <option value="Secondary">one</option>
                    <option value="Diploma">two</option>
                    <option value="Bachelor/Honors">Three</option>
                    <option value="Masters">Four</option>
                    <option value="Doctoral">five</option>
                  </select>
                  <MDBInput label="Institute Name" outline />
                  <MDBInput label="Group" outline />
                  <MDBBtn
                    rounded
                    className="float-left grey lighten-2"
                    onClick={this.handleNextPrevClick(1)(1)}
                  >
                    previous
                  </MDBBtn>
                  <MDBBtn
                    color="mdb-color"
                    rounded
                    className="float-right custom-btn"
                    onClick={this.handleNextPrevClick(1)(3)}
                  >
                    next
                  </MDBBtn>
                </MDBCol>
              )}

              {this.state.formActivePanel1 === 3 && (
                <MDBCol md="12" className="contribution-add-location">
                  <h2>Details Information</h2>
                  <fieldset class="form-group">
                    <div class="row">
                      <legend class="col-form-label col-sm-2 pt-0">
                        Do you have any tutoring experience?
                      </legend>
                      <div class="col-sm-10">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                          />
                          <label class="form-check-label" for="gridRadios1">
                            Yes
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                          <label class="form-check-label" for="gridRadios2">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <MDBInput label="Tutoring Time" outline />
                  <MDBInput
                    type="textarea"
                    label="Recuirement"
                    rows="3"
                    outline
                  />
                  <MDBBtn
                    rounded
                    className="float-left grey lighten-2"
                    onClick={this.handleNextPrevClick(1)(2)}
                  >
                    previous
                  </MDBBtn>
                  <MDBBtn
                    color="success"
                    rounded
                    className="float-right"
                    onClick={this.handleSubmission}
                  >
                    submit
                  </MDBBtn>
                </MDBCol>
              )}
            </MDBRow>
          </form>
        </MDBContainer>
      </section>
    );
  }
}

export default HireTutor;
