import React, { Component } from 'react';

import { MDBInput } from "mdbreact";
import { connect } from 'react-redux';
import Axios from 'axios';
import "./AddTutorial.css"
import FileBase64 from 'react-file-base64';
import {Link} from "react-router-dom"
class AddTutorial extends Component {
    state = {
        title: "",
        category: "",
        description: "",
        learn: "",
        url: "",
        amount: "",
        youtube: [],
        files: [],
        skills: [],
        image: ""
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }
    getFiles(files) {
        console.log(files[0].base64)
        let image = files[0].base64.replace("data:image/jpeg;base64,", "")
        console.log(image)
        this.setState({ image: image })
    }


    submitHandler = (e) => {
        e.preventDefault()
        let { title, category, description, learn, url, amount, youtube } = this.state
        let data = {
            authentication: "Tuition.app",
            title,
            status: "1",
            category_id: this.state.category,
            sub_category_id: this.state.categorySub,
            youtube: youtube.join(","),
            learn,
            amount,
            description,
            image: this.state.image,
            api_token: this.props.auth.api_token,
            skills: this.state.skills.join(","),
        }
        Axios.post("http://anytuition.com/anytuition/public/api/v1/tutorials/add", data)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    divisionHandler = e => {
        let val = e.target.value;
        console.log(this.props.subCategory)
        let subCategory = this.props.subCategory.filter(ds => {
            return ds.category_id == val
        })
        this.setState({
            category: val,
            subCategory
        })
    }
    addUrl = () => {
        this.setState({
            youtube: this.state.youtube.concat(this.state.url)
        })
    }
    onChangeHandlerSkill = event => {
        this.setState({
            skills: this.state.skills.concat(event.target.value)
        })
    }
    render() {
        console.log(this.props.category)
        return (
            <section className="section-">
                <div className="container">
                <div className="profile-buttons d-flex ">
                  <Link to="/add/toturial" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Add Toturial
                      </Link>
                  {/* <Link to="/profile/email_resume" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Applied Tuitions
                      </Link> */}

                  <Link to="/tutorial/lists" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Tutorial List
                      </Link>
                  <Link to="/profile/cart" class="theme-line-button hhh">
                    <i class="fa fa-pencil" /> Cart Information
                      </Link>
                </div>
                    <h2>Add Tutorial</h2>
                    <form action="" onSubmit={this.submitHandler}>
                        <div className="add-tutorial-area">
                            <FileBase64
                                multiple={true}
                                onDone={this.getFiles.bind(this)} />
                            <MDBInput
                                label="Title"
                                name="title"
                                value={this.state.title}
                                onChange={this.changeHandler}
                                outline />
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">
                                        Select category:
                      </label>

                                </div>

                                <select class="custom-select" id="inputGroupSelect01" onChange={this.divisionHandler}>
                                    <option selected>Select Area:</option>
                                    {this.props.category && this.props.category.map(dv => (
                                        <option value={dv.id}>{dv.title}</option>
                                    ))}

                                </select>
                            </div>

                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <label class="input-group-text" for="inputGroupSelect01">
                                        Select Sub category:
                      </label>
                                </div>
                                <select class="custom-select" id="inputGroupSelect01" name="categorySub" onChange={this.changeHandler}>
                                    <option>Select</option>
                                    {this.state.subCategory && this.state.subCategory.map(ds => {
                                        return (
                                            <option value={ds.id}>{ds.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <MDBInput
                                type="textarea"
                                label="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                outline />
                            <MDBInput
                                label="learn"
                                name="learn"
                                value={this.state.learn}
                                onChange={this.changeHandler}
                                outline />
                            <ul>
                                {this.state.youtube && this.state.youtube.map(y => (
                                    <li>{y}</li>
                                ))}
                            </ul>
                            <div className="align-items-center justify-content-between url-input">
                                <MDBInput
                                    label="url"
                                    name="url"
                                    value={this.state.url}
                                    onChange={this.changeHandler}
                                    outline />
                                <button className="btn btn-success" onClick={this.addUrl}>Add</button>
                            </div>
                            <h6>skills</h6>
                            {this.props.skills && this.props.skills.map((sk, i) => (
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id={"customCheck1" + i} value={sk.id} onChange={this.onChangeHandlerSkill} />
                                    <label class="custom-control-label" for={"customCheck1" + i}>{sk.title}</label>
                                </div>
                            ))}

                            <MDBInput
                                label="amount"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.changeHandler}
                                outline />
                        </div>

                        <button className="btn btn-success" type="submit"> Add Tutorial </button>
                    </form>

                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        error: state.error,
        isloading: state.meta.isLoading,
        auth: state.auth.user,
        ex: state.edu.experiences,
        category: state.edu.tutorials.tutorial_categories,
        subCategory: state.edu.tutorials.tutorial_sub_categories,
        skills: state.study.skills
    }
}
export default connect(mapStateToProps)(AddTutorial);