import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
class Applied extends Component {
    state = {}
    render() {
        return (
            <section>
                <div className="container">
                    <div class="panel-heading panel-heading-01 text-center">
                        <i class="glyphicon glyphicon-road"></i>  Applied Tuitions
            </div>
                    <div className="panel">

                        <div class="panel-body-02">

                            <div>

                                <div id="txtResult">







                                    <table class="table table-inside">
                                        <tbody>

                                            {this.props.requestTuitions && this.props.requestTuitions.map(rt => {
                                                console.log(rt)
                                                return (
                                                    <tr className="trtr">
                                                        <td >
                                                            <Link to={"/jobdetails/" + rt.id}>
                                                                <p>{rt.description ? rt.description : "Title"}</p>
                                                            </Link>
                                                        </td>

                                                        <td > <p >{rt.salary}</p></td>
                                                        <td ><p><i class="glyphicon glyphicon-calendar icon-padding"></i>{rt.joining_date}</p>
                                                        </td>

                                                        <td >
                                                            <p><i class="glyphicon glyphicon-paperclip " rel="tooltip" data-placement="top" data-original-title="Uploaded Resume" ></i>
                                                            </p>
                                                        </td>

                                                        <td >
                                                            <input name="checkDelete11" type="checkbox" id="checkDelete11" value="25810452" />
                                                        </td>
                                                    </tr>
                                                )
                                            })}

                                        </tbody>
                                    </table>






                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


const mapStateToProps = state => {
    return {
        adminTuitions: state.edu.adminTuitions,
        requestTuitions: state.study.tuitions,
        auth: state.auth.user,
    };
};
export default connect(mapStateToProps)(Applied);