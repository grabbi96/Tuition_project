import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'

class TutorialOrder extends Component {
    state = {
        divisions: [],
        districts: [],
        areas: [],
        division: "",
        district: "",
        area: "",
        payment: "",
        mobile: "",
        address: "",
        name: ""
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    divisionHandler = e => {
        let val = e.target.value;
        let districts = this.props.com.districts.filter(ds => {
            return ds.division_id == val
        })
        this.setState({
            division: val,
            districts
        })
        console.log(val)
        console.log(districts)
    }
    districtHandler = e => {
        let val = e.target.value;
        let areas = this.props.com.areas.filter(ds => {
            console.log(ds.district_id)
            return ds.district_id == val
        })
        this.setState({
            district: val,
            areas
        })
        console.log(val)
        console.log(areas)
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.props.auth.api_token)
        let data = {
            authentication: 'Tuition.app',
            division_id: this.state.division,
            district_id: this.state.district,
            area_id: this.state.area ? this.state.area : "1",
            full_name: this.state.name,
            tutorial_id: "2",
            mobile: this.state.mobile,
            payment_method: '1',
            address: this.state.address,
            api_token: this.props.auth.api_token
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/tutorialorders/add', data)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })




    }
    render() {
        let divisions, mediums, classes, subjects, facilities, learnings;
        if (this.props.com) {
            divisions = this.props.com.divisions
            mediums = this.props.com.media
            classes = this.props.com.classes
            subjects = this.props.com.subjects
            facilities = this.props.com.facilities
            learnings = this.props.com.learnings
        }
        return (
            <section>
                <div class="register-details-section">
                    <div className="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="register-main">
                                    <div class="register-buy-header">
                                        <h2>Order Details</h2>
                                    </div>

                                    <form onSubmit={this.submitHandler} method="POST" class="form-horizontal" action="https://www.salegarden.com/orderDetailsStore">
                                        <input type="hidden" name="_token" value="lMjf7JajL8CLqbo68BUHzk8i3l5W1L6Var5KeKbk" />
                                        <input type="hidden" name="order_track_id" value="9IenHPIi8JA20190706144759" />
                                        <div class="register-buy-wrapper">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <label>Full Name</label>
                                                </div>
                                                <div class="col-md-9 form-group">
                                                    <input type="text" className="form-control" name="name" value={this.state.name} placeholder="Write your name" onChange={this.changeHandler} />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>Division</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.divisionHandler}>
                                                            <option value="">Select Area</option>
                                                            {divisions && divisions.map(dv => (
                                                                <option value={dv.id}>{dv.title}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>District</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.districtHandler}>

                                                            <option value="">Select Area</option>
                                                            {this.state.districts && this.state.districts.map(ds => {
                                                                return (
                                                                    <option value={ds.id}>{ds.title}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>area</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <select name="order_area" className="form-control" onChange={this.changeHandler}>
                                                            <option value="">Select Area</option>
                                                            {this.state.areas && this.state.areas.map(ds => {
                                                                console.log(ds)
                                                                return (
                                                                    <option value={ds.id}>{ds.title}</option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>Address</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <textarea onChange={this.changeHandler} placeholder="write your address" className="form-control" name="address">{this.state.address}</textarea>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>Mobile no</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <input type="text" className="form-control" name="mobile" onChange={this.changeHandler} value={this.state.mobile} placeholder="write your number" />
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-3">
                                                        <label>Payment Method</label>
                                                    </div>
                                                    <div class="col-md-9 form-group">
                                                        <select name="payment" className="form-control" onChange={this.changeHandler}>
                                                            <option value="COD">Cash on Delivery</option>
                                                            <option value="COD">Bkash Payment</option>
                                                        </select>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-md-6 col-md-offset-3">
                                                <button type="submit" class="btn btn-primary">
                                                    Continue To Next
                                            </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4"></div>
                        </div>


                    </div>

                </div>
            </section >
        );
    }
}
const mapStateToProps = state => {
    return {
        com: state.comm.commonSync,
        error: state.error,
        auth: state.auth.user,
    };
};
export default connect(mapStateToProps)(TutorialOrder);