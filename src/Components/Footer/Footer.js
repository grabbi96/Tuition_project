import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import "./Footer.css";
class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <div class="container">
          <div class="row ">
            <div class="col-md-4 col-sm-8">
              <img src={logo} alt="sdf" />
              {/* <p>
                Id pri consul aeterno petentium. Vivendo abhorreant et vim, et
                quot persecuti mel. Libris hendrerit ex sea. Duo legere
                evertitur an, pri hinc doctus definitiones an, vix id dicam
                putent. Ius ornatus instructior in.
              </p> */}
            </div>
            <div class="col-md-4 col-sm-4">
              <h3>Discover</h3>
              <ul>
                <li>
                  <a href="#0">About us</a>
                </li>
                <li>
                  <a href="#0">FAQ</a>
                </li>
                <li>
                  <a href="#0">Tips for guardians</a>
                </li>
                <li>
                  <a href="#0">Contacts</a>
                </li>
                <li>
                  <a href="#0">Tips for Tutors</a>
                </li>
                <li>
                  <a href="#0">Terms and condition</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4 col-sm-12" id="contact_bg">
              <h3>Contacts</h3>
              <ul id="contact_details_footer">
                <li id="address_footer">
                  <i class="fas fa-home" />Bashundhara Residential Area, Dhaka-1229
                </li>
                <li id="phone_footer">
                  <i class="fas fa-mobile-alt" />
                  <a href="tel://004542344599">01636-408000</a>{" "}
                </li>
                <li id="email_footer">
                  <i class="far fa-envelope" />
                  <a href="#0">anytution@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div id="social_footer">
            <ul>
              <li>
                <a href="#0">
                  <i class="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="fab fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#0">
                  <i class="fab fa-youtube" />
                </a>
              </li>
            </ul>
          </div> */}
        </div>
        <div id="copy">
          <div class="container">© Home Alarms 2019 - All rights reserved.</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
