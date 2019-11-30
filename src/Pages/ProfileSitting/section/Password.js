import React, { Component } from 'react';

import { MDBInput, MDBBtn } from 'mdbreact'
import { connect } from 'react-redux';
import Axios from 'axios';
class Password extends Component {
    state = {
        old_password: "",
        password: "",
        password_confirmation: ""
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

        console.log(this.state)

    }
    submitHandler = e => {
        e.preventDefault()
        let { old_password, password, password_confirmation } = this.state
        let data = {
            authentication: "Tuition.app",
            old_password,
            password,
            password_confirmation,
            api_token: this.props.auth.api_token
        }
        console.log(data)
        Axios.post("http://anytuition.com/anytuition/public/api/v1/updatePassword")
            .then(result => {
                // store.dispatch(fatchAllData())
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <section className="pi-section">
                <h2>Change Your Password</h2>

                <form action="" onSubmit={this.submitHandler}>
                    <MDBInput label="Old Password" outline name='old_password' value={this.state.old_password} onChange={this.changeHandler} />
                    <MDBInput label="New Password" outline name='password' value={this.state.password} onChange={this.changeHandler} />
                    <MDBInput label="Confirm Password" outline name='password_confirmation' value={this.state.password_confirmation} onChange={this.changeHandler} />

                    <MDBBtn
                        color="light-blue"
                        className="mb-3"
                        type="submit"
                    >
                        submit
                          </MDBBtn>
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading,
        auth: state.auth.user,
        edu: state.edu.educations,
    }
}

export default connect(mapStateToProps)(Password);