import React, { Component } from 'react'
import './StudyInAbroad.css';
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from "mdbreact"
import university from "../../../src/assets/images/university.jpg"
import { connect } from "react-redux"
class StudyInAbroad extends Component {
  state = {
    modal: false,
    study: {}
  }

  toggle = (id) => {
    console.log(id)

    let filterStudy = this.props.study.filter(ss => ss.id === id)


    this.setState({
      study: filterStudy[0]
    })

    console.log(this.state)
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    console.log(this.props.study)
    return (
      <section className="study-abroad-section">
        <MDBContainer>
          <div className="header-title text-center category-header bg-new-color">
            <h2>Search University Profile</h2>
          </div>
          <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
            <MDBModalHeader toggle={this.toggle}>
              <div className="row">
                <div className="header-left">
                  {this.state.study && (
                    <img
                      // src=" http://hotjobs.bdjobs.com/logos/netzlogo48.jpg "
                      src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + this.state.study.image}
                      alt="Click Job Title to View Detailsâ€¦"
                      title="NETZ Partnership for Development and Justice"
                    />
                  )}

                  <h2>{this.state.study && this.state.study.title} </h2>
                </div>
                {/* <div className="header-right">
                  <ul>
                    <li>
                      how to apply at city
                    </li>
                    <li>
                      Pre - Arrival Procedure
                    </li>
                    <li>
                      Post - Arrival Procedure
                    </li>
                  </ul>
                </div> */}
              </div>
            </MDBModalHeader>
            <MDBModalBody>
              {/* <ol>
                <li>
                  You can choose any preferred programs by browsing through the information in Study@GUC page. We offer Diploma level up to postgraduate level (Master and PhD) for you to choose from
              </li>
                <li>
                  Compare your highest academic qualifications with the entry requirement. Admission through APEL is also accepted. For further inquiries, do not hesitate to leave your questions through the Enquiry Form.
              </li>
                <li>
                  Please meet our Academic Advisors team. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi adipisci magni ipsam, facilis iure rem placeat corporis reiciendis illo voluptatibus quos exercitationem animi tempora eius iusto quibusdam ab id.
              </li>
                <li>
                  Filling in our Online Application will take you less than 5 minutes. Please make sure all given details are correct before submitting.
              </li>
                <li>
                  Your application will be processed and you will receive a conditional offer letter (COL) at your email address. Please read the instruction given carefully for further action.
              </li>

                <li>
                  You are required to email a copy of your academic transcript to inso@geomatika.edu.my or bring along the original academic transcript to regional offices.
                <ul>
                    <li>
                      Diploma Scroll and Academic Transcript certificate (for Bachelor Student)
                  </li>
                    <li>
                      Bachelors Degree and Academic Transcript (for Master student)
                  </li>
                    <li>
                      Bachelors Degree, Masters Degree and Academic Transcript (for Ph.D students)
                  </li>

                  </ul>
                </li>
                <li>
                  Once your visa is approved, you will be required to make the following payments to allow us to make arrangement for your arrival in Malaysia.
                    <ul>




                    <li>Intended Course Fee (1 year) – RM11,000</li>
                    <li>  IELTS exam conducted by IDP Malaysia – RM900</li>
                    <li>Airport pick-up arrangement – RM300</li>
                    <li>Grand total (after discount) – RM12,145</li>
                  </ul>
                </li>
                <li>
                  Undergraduate course fees include Post-arrival EMGS Medical Check-Up fee in Malaysia and i-Kad (International Student Card issued by immigration Malaysia), Medical Insurance for one year, Student Pass fee, and Personal Bond fee. Please note that these fees are non-refundable once the student is enrolled into the program.
                </li>
              </ol>
*/}


              {this.state.study && (
                <div dangerouslySetInnerHTML={{ __html: this.state.study.description }} />
              )}

            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
              <MDBBtn color="primary">Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
        <div className="container">
          <div className="row ">
            {this.props.study && this.props.study.map(st => {
              return (
                <div class="col-lg-4 col-sm-4 col-xs-12">
                  <div class="cursor" onClick={() => this.toggle(st.id)}>
                    <div class="hotJobsCompany">
                      <div class="col-md-3 pr">
                        <div class="companyLogo">
                          <img
                            // src=" http://hotjobs.bdjobs.com/logos/netzlogo48.jpg "
                            src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + st.image}
                            alt="Click Job Title to View Detailsâ€¦"
                            title="NETZ Partnership for Development and Justice"
                          />
                        </div>
                      </div>
                      <div class="col-md-9 pl">
                        <div class="companyDetails">
                          <h5>
                            {/* NETZ Partnership for Development and Justice */}
                            {st.title}
                          </h5>
                          <ul>
                            <li>
                              <a
                                href="/"
                                target="_blank"
                                title="Finance Officer"
                              >
                                {/* Finance Officer */}
                                {st.subtitle}
                              </a>
                            </li>
                            {/* <li>
                              <a
                                href="/"
                                target="_blank"
                                title="Programme Officer"
                              >
                                Programme Officer
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              )
            })}

          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    study: state.study.study
  };
};
export default connect(mapStateToProps)(StudyInAbroad);