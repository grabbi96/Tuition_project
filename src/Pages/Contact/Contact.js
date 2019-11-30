import React, { Component } from "react";
import { MDBInput, MDBBtn } from "mdbreact";

import "./Contact.css";
class Contact extends Component {
  state = {};
  render() {
    return (
      <section className="contact-section section-padding">
        <div class="section-content pb-0">
          <div class="container pb-2 pb-md-3 pb-lg-4">
            <div class="row">
              <div class="col-lg-8 col-md-10 col-12 mx-auto">
                <h3 class="section-title text-center">
                  Let's talk or just say Hello
                </h3>

                <form
                  id="poojy-contact-form"
                  class="contact-form mt-4 mt-md-5"
                  method="post"
                  action="inc/send-mail.php"
                >
                  <div class="cf-message" />
                  <div class="row">
                    <div class="col-sm-6">
                      <p>
                        <MDBInput label="FIRST NAME" />
                      </p>
                    </div>

                    <div class="col-sm-6">
                      <p>
                        <MDBInput label="LAST NAME" />
                      </p>
                    </div>
                  </div>
                  <p>
                    <MDBInput label="EMAIL ADDRESS" />
                  </p>
                  <p>
                    <MDBInput label="SUBJECT" />
                  </p>

                  <p>
                    <MDBInput type="textarea" label="Write your message..." />
                  </p>

                  <p class="submit text-center">
                    <input
                      type="hidden"
                      name="action"
                      value="send_message"
                      class="has_value"
                    />
                    <MDBBtn color="indigo">Send Message</MDBBtn>
                  </p>
                </form>
              </div>
            </div>
          </div>

          <div class="inner-section has-sm-padding has-lighter-bg mt-5">
            <div class="container">
              <div class="row">
                <div class="col-md-4 col-12 text-center mb-5 mb-md-0">
                  <h3 class="small-title">Project enquiry</h3>
                  <a href="#">start-project@poojy.com</a>
                </div>

                <div class="col-md-4 col-12 text-center mb-5 mb-md-0">
                  <h3 class="small-title">Support enquiry</h3>
                  <a href="#">help@poojy.com</a>
                </div>

                <div class="col-md-4 col-12 text-center">
                  <h3 class="small-title">Let's connect</h3>
                  <ul class="social-nav">
                    <li>
                      <a href="#">
                        <i class="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fab fa-google-plus" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon ion-logo-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="icon ion-logo-youtube" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
