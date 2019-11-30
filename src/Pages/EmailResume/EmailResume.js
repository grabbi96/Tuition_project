import React, { Component } from 'react';
import "./EmailResume.css"
import { connect } from 'react-redux';


class EmailResume extends Component {
    state = {}
    render() {

        console.log(this.props.requestTuitions)
        return (
            <section className="applied-list-section pi-section">
                <div className="container">
                    <div class="panel-heading panel-heading-01">
                        <i class="glyphicon glyphicon-road"></i>  Applied Tuitions
            </div>
                    <div className="panel">
                        {/* <div class="panel-body assessment">
                            <div id="alldiv" class="alldiv clearfix">
                                <div class="header-grey">

                                    <form method="post" role="form" id="frmSearch">
                                        <div class="search-form">
                                            <div class="alert alert-danger fade in">
                                            </div>
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label for="fromDate">From Date</label>
                                                    <div class="inner-addon left-addon">
                                                        <i class="glyphicon glyphicon-calendar"></i>
                                                        <input type="text" class="form-control datepicker" id="fromDate" name="fromDate" placeholder="Select date" value="" />
                                                    </div>
                                                </div>

                                                <div class="col-md-3">
                                                    <label for="toDate">To Date</label>
                                                    <div class="inner-addon left-addon">
                                                        <i class="glyphicon glyphicon-calendar"></i>
                                                        <input type="text" class="form-control datepicker" id="toDate" name="toDate" placeholder="Select date" value="" />
                                                    </div>
                                                </div>


                                                <div class="col-md-3">
                                                    <label for="fromDate">Subject</label>

                                                    <input type="text" class="form-control" id="subjectName" name="subjectName" placeholder="Type subject" value="" maxlength="120" />
                                                </div>

                                                <div class="col-md-3">
                                                    <label for="toDate">CV Type</label>

                                                    <select id="cvType" name="cvType" class="form-control combo">
                                                        <option value="">Select </option>
                                                        <option value="1">Uploaded Resume</option>
                                                        <option value="0">My Bdjobs Format</option>
                                                    </select>

                                                </div>
                                                <div class="col-md-12 text-center">
                                                    <input type="button" value="Search" id="search" name="search" onclick="pagination(1)" class="btn btn-green" />
                                                </div>

                                            </div>


                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div> */}

                        <div class="panel-body-02">

                            <div>

                                <div id="txtResult">
                                    <form name="form1" id="form1" action="DeleteSentEmail.asp" method="post">
                                        <table class="table table-inside" >
                                            <thead>

                                                <tr class="panel-heading-02 ja-panel">
                                                    <th>Subject</th>
                                                    <th>Email To</th>
                                                    <th>Emailed on</th>
                                                    <th>Applied date</th>
                                                    <th>
                                                        <a href="#" onclick="CollectIDs();">
                                                            <a id="delete" onclick="CollectIDs();">
                                                                <span class="glyphicon glyphicon-trash icon-padding"></span>Delete
                                                    </a>
                                                        </a>
                                                    </th>
                                                </tr>

                                            </thead>
                                        </table>

                                    </form>

                                    <table class="table table-inside">
                                        <tbody>

                                            {this.props.requestTuitions && this.props.requestTuitions.map(rt => {
                                                console.log(rt)
                                                return (
                                                    <tr className="trtr">

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
export default connect(mapStateToProps)(EmailResume);