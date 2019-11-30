import React, { Component } from 'react';

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
import axios from 'axios'
import store from "../../../store/index"
import { fatchAllData } from "../../../store/actions/category"

class ShowProfile extends Component {
    state = {
        companyBusiness: "",
        company: "",
        companyLocation: "",
        year: "",
        designation: "",
        department: "",
        responsibilities: "",
        employmentStart: "",
        employmentEnd: ""
    }

    changeHandler = event => {


    }

    sSubmitHandler = event => {
        event.preventDefault()
        let data = {
            authentication: 'Tuition.app',
            popular_offer_id: this.props.popularOffer[0].id,
            popular_type_id: this.props.auth.id,
            api_token: this.props.auth.api_token,
            type: '1'
        }
        console.log(data)
        axios.post('http://anytuition.com/anytuition/public/api/v1/populars/add', data)
            .then(result => {
                console.log(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {

        return (
            <div className="accademic-sitting">
                <form action="" onSubmit={this.sSubmitHandler}>
                    <button type="submit" className="btn btn-success"> Add me</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading,
        auth: state.auth.user,
        ex: state.edu.experiences,
        popularOffer: state.popular.popularTable
    }
}

export default connect(mapStateToProps)(ShowProfile);