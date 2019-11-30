import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  NavItem,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import { logout } from "../../store/actions/authAction"
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
class Header extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  logoutHandler = () => {
    this.props.logout(this.props.history)
  }
  resHandler = () => {
    this.setState({ isOpen: false });
  }
  render() {
    let porf = 1
    if (this.props.auth) {

      if (this.props.auth.type == 1) {
        porf = 1
      }

      if (this.props.auth.type == 2) {
        porf = 2
      }
    }
    return (
      <header class="header-wrapper">
        <div class="top-header bg-one">
          <div class="container">
            <div class="row align-items-center mbile-ser">

              <div class="right-list ">
                <ul>
                  {/* <li>
                    <a href="#">Our Causes</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li> */}
                  <li>
                    <ul class="social-icon">
                      <li>
                        <a href="https://www.facebook.com/anytution/" class="tran3s">
                          <i class="fab fa-facebook" aria-hidden="true" />
                        </a>
                      </li>

                      <li>
                        <a href="#" class="tran3s">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" class="tran3s">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-phone" aria-hidden="true" /> 01636408000
                    </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="left-list text-right">
                {!this.props.isAuthentication && (
                  <ul>

                    <MDBNavItem>
                      <NavLink to="/register">
                        Register <FontAwesomeIcon icon={faCoffee} />
                      </NavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <NavLink className="nav-link" to="/login">
                        Login
                    </NavLink>
                    </MDBNavItem>

                  </ul>
                )}

                {this.props.isAuthentication && (
                  <MDBDropdown>
                    <MDBDropdownToggle caret>
                      {this.props.auth.name}
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                      {porf == 1 && (
                        <Link to="/teacher_profile" className="dropdown-item">Profile</Link>
                      )}

                      {porf == 2 && (
                        <Link to="/guardian_profile" className="dropdown-item">Profile</Link>
                      )}

                      {porf == 1 && (
                        <Link to="/profile/sitting" className="dropdown-item">Setting</Link>
                      )}
                      <MDBDropdownItem divider />
                      <MDBDropdownItem onClick={event => {
                        event.preventDefault()
                        this.logoutHandler()
                      }}>Logout</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>

                )}

              </div>
            </div>
          </div>
        </div>

        <div class="theme-menu-wrapper">
          <div class="container">
            <MDBNavbar dark expand="md">
              <MDBNavbarBrand>
                <img src={Logo} alt="logo" />
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.toggleCollapse} />
              <MDBCollapse
                id="navbarCollapse3"
                isOpen={this.state.isOpen}
                navbar
              >
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <NavLink exact to="/" onClick={this.resHandler} className="waves-effect waves-light">
                      Home
                    </NavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <NavLink
                      exact
                      to="/find-job"
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                    >
                      Find tuition
                    </NavLink>
                  </MDBNavItem>

                  <MDBNavItem>
                    <NavLink
                      exact
                      to="/tutor_list"
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                    >
                      Tutors
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink
                      to="/ask_for_tutor"
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                    >
                      Ask For Tutor
                    </NavLink>
                  </MDBNavItem>
                  {/* <MDBNavItem>
                    {" "}
                    <NavLink
                      exact
                      to="/ask_for_tutor"
                      className="waves-effect waves-light"
                    >
                      Request For tutor
                    </NavLink>
                    <a href="#" className="waves-effect waves-light" />
                  </MDBNavItem> */}
                  <MDBNavItem>
                    {" "}
                    <a href="#">
                      <NavLink
                        to="/get_tutorial"
                        onClick={this.resHandler}
                        className="waves-effect waves-light"
                      >
                        Get Tutorial
                      </NavLink>
                    </a>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink
                      exact
                      to="/book_sale"
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                    >
                      Buy Book
                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem>

                    <NavLink
                      exact
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                      to="/study_in_abroad">
                      Study Abroad

                    </NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink
                      exact
                      to="/contact"
                      onClick={this.resHandler}
                      className="waves-effect waves-light"
                    >
                      Contact
                    </NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </div>
        </div>
      </header>
    );
  }
}
const mapStateToProps = state => {
  return {
    tuitions: state.study.tuitions,
    auth: state.auth.user,
    com: state.comm.commonSync,
    error: state.error,
    isAuthentication: state.auth.isAuthentication
  };
};
export default connect(mapStateToProps, { logout })(withRouter(Header));
