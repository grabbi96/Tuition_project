import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { Link } from "react-router-dom"

class TuitionDetails extends Component {
    state = {
        users: []
    }

    userGet = (id) => {

        if (this.state.users.length < 1) {

        }

    }

    componentDidMount() {
        let data = {
            authentication: 'Tuition.app',
            tuition_id: this.props.match.params.id,
            api_token: this.props.auth.api_token
        }
        Axios.post("http://anytuition.com/anytuition/public/api/v1/tuitions/users", data)
            .then(item => {
                console.log(item.data)
                this.setState({
                    users: item.data.data.users
                })
            })
    }

    render() {
        // console.log(this.props.match.params.id)

        // let filter = this.props.requestTuitions.find(rt => {
        //     return rt.id == this.props.match.params.id

        // })
        // if (filter) {
        //     this.userGet(filter.id)

        // }



        return (
            <section>
                <div className="container">
                    <table class="table table-inside">
                        <thead>
                            <tr class="panel-heading-02 ja-panel">
                                <th>Subject</th>
                                <th>Email To</th>
                                <th>Emailed on</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users && this.state.users.map(user => (

                                <tr className="trtr">
                                    <td >
                                        <p>
                                            <Link to={"/tutor_list/" + user.id ? user.id : "2"}>{user.name}
                                            </Link>

                                        </p>
                                    </td>

                                    <td > <p >{user.email ? user.email : "grabbi96@gmail.com"}</p></td>
                                    <td ><p><i class="glyphicon glyphicon-calendar icon-padding"></i>21 Dec 2018</p>
                                    </td>
                                    <td><Link to={"/tutor_list/" + user.id}>View</Link></td>
                                </tr>

                            ))}

                            {this.state.users.length < 1 && (

                                <tr className="trtr">
                                    <td >
                                        <p>
                                            <Link to={"/tutor_list/2"}>Rabbi
                                            </Link>

                                        </p>
                                    </td>

                                    <td > <p >grabbi96@gmail.com</p></td>
                                    <td ><p><i class="glyphicon glyphicon-calendar icon-padding"></i>21 Dec 2018</p>
                                    </td>

                                    <td >
                                        <p><i class="glyphicon glyphicon-paperclip " rel="tooltip" data-placement="top" data-original-title="Uploaded Resume" ></i>
                                        </p>
                                    </td>

                                    <td >
                                        <input name="checkDelete11" type="checkbox" id="checkDelete11" value="25810452" />
                                    </td>
                                </tr>

                            )}
                        </tbody>
                    </table>
                </div>
            </section >
        );
    }
}
const mapStateToProps = state => {
    return {
        adminTuitions: state.edu.adminTuitions,
        requestTuitions: state.edu.requestTuitions,
        auth: state.auth.user,
    };
};
export default connect(mapStateToProps)(TuitionDetails);