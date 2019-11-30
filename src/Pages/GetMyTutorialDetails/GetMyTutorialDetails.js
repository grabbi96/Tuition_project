import React, { Component } from 'react';
import axios from "axios"
import { connect } from "react-redux";
import { fatchAllData, allFetchData } from "../../store/actions/category"
import {
    MDBInput, MDBBtn, MDBContainer,
    MDBCollapse,
    MDBCard,
    MDBCardBody,
    MDBCollapseHeader,
    MDBIcon,
} from "mdbreact"
class GetMyTutorialDetails extends Component {
    state = {
        title: '',
        subTitle: "",
        collapseID: 'collapse0',
        youtube: "",
        video: null,
        hh: true
    }
    getCategory = id => {
        if (this.props.category) {
            let dd = this.props.category.find(d => d.id == id)
            if (dd) {
                return dd.title
            }
        }
    }
    submitHandler = event => {
        event.preventDefault()
        let tutorial = this.props.tutorials.find(tt => tt.id == this.props.match.params.id)
        let formData = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            tutorial_id: tutorial.id,
            title: this.state.title,
            status: "1"
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/tutorialitems/add', formData)
            .then(result => {
                console.log(result.data)
                this.props.fatchAllData()
                this.props.allFetchData()
            })
            .catch(err => {
                console.log(err)
            })

    }
    submitHandlerSubTitle = val => {
        this.setState({
            hh: false
        })
        let tutorial = this.props.tutorials.find(tt => tt.id == this.props.match.params.id)
        let formData = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            tutorial_item_id: val,
            tutorial_id: tutorial.id,
            title: this.state.subTitle,
            youtube: this.state.youtube,
            status: "1"
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/tutorialitemdetails/add', formData)
            .then(result => {
                this.props.fatchAllData()
                this.props.allFetchData()
                this.setState({
                    hh: true
                })

            })
            .catch(err => {
                console.log(err)
            })
    }
    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }
    getSubCategory = id => {
        if (this.props.subCategory) {
            let dd = this.props.subCategory.find(d => d.id == id)
            if (dd) {
                return dd.title
            }
        }
    }
    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));

    videoHandler = val => {
        this.setState({
            video: val
        })
    }
    deleteITem = (e, id) => {
        e.preventDefault()
        let formData = {
            authentication: "Tuition.app",
            api_token: this.props.auth.api_token,
            id: id
        }
        axios.post('http://anytuition.com/anytuition/public/api/v1/tutorialitemdetails/delete', formData)
            .then(result => {
                this.props.fatchAllData()
                this.props.allFetchData()


            })
            .catch(err => {
                console.log(err)
            })
    }
    getAllSubItems = val => {
        console.log(this.props.tutorialSubItems)
        let filters = this.props.tutorialSubItems.filter(ts => ts.tutorial_item_id == val)
        if (filters) {
            return filters.map(fl => (
                <div className="video-list my-profile position-relative" onClick={() => this.videoHandler(fl.youtube)}>
                    <h4>{fl.title}</h4>
                    <i class="fas fa-play-circle"></i>
                    <a href="red" className="cose-delete text-red position-absolute" onClick={(e) => this.deleteITem(e, fl.id)}>Delete</a>
                </div>
            ))


        }
    }
    render() {
        let tutorial;
        if (this.props.tutorials) {
            tutorial = this.props.tutorials.find(tt => tt.id == this.props.match.params.id)
        }
        let tutorialItems
        if (this.props.tutorialItems) {
            tutorialItems = this.props.tutorialItems.filter(ti => ti.tutorial_id == tutorial.id)
        }
        console.log(tutorialItems)


        return (
            <section>
                <div className="container">
                    {tutorial && (
                        <div>
                            <h2>Title : {tutorial.title}</h2>
                            <h3>Amount:{tutorial.amount}</h3>
                            <p>Description:{tutorial.description}</p>
                            {this.state.video && (
                                <iframe
                                    width="1140"
                                    height="480"
                                    src={this.state.video}
                                    frameborder="0"
                                    allow="autoplay; encrypted-media"
                                    allowfullscreen=""
                                />
                            )}
                            {tutorialItems && tutorialItems.map((lk, i) => (
                                <MDBCard>

                                    <MDBCollapseHeader
                                        onClick={this.toggleCollapse('collapse' + i)}
                                        tag='h3'
                                        tagClassName='red-text d-flex justify-content-between align-items-center'
                                    >
                                        {lk.title}
                                        <MDBIcon
                                            icon={
                                                this.state.collapseID === 'collapse' + i
                                                    ? 'angle-up'
                                                    : 'angle-down'
                                            }
                                            className='red-text'
                                            size='2x'
                                        />
                                    </MDBCollapseHeader>
                                    <MDBCollapse id={'collapse' + i} isOpen={this.state.collapseID}>
                                        <MDBCardBody class='pt-0'>
                                            {this.getAllSubItems(lk.id)}

                                            <form onSubmit={(e) => {
                                                e.preventDefault()
                                                this.submitHandlerSubTitle(lk.id)
                                            }}>
                                                <MDBInput
                                                    label="title"
                                                    onChange={this.changeHandler}
                                                    name="subTitle"
                                                />
                                                <MDBInput
                                                    label="Youtube"
                                                    onChange={this.changeHandler}
                                                    name="youtube"
                                                />
                                                <MDBBtn color="light-blue" className="mb-3" type="submit">
                                                    Add
                                                </MDBBtn>
                                            </form>
                                        </MDBCardBody>
                                    </MDBCollapse>
                                </MDBCard>
                            ))}
                            <form onSubmit={this.submitHandler}>
                                <MDBInput
                                    label="title"
                                    onChange={this.changeHandler}
                                    name="title"
                                />
                                <MDBBtn color="light-blue" className="mb-3" type="submit">
                                    Add
                    </MDBBtn>
                            </form>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => {
    return {
        tutorials: state.edu.tutorials.tutorials,
        tutorialItems: state.edu.tutorials.tutorial_items,
        tutorialSubItems: state.edu.tutorials.tutorial_item_details,
        category: state.edu.tutorials.tutorial_categories,
        subCategory: state.edu.tutorials.tutorial_sub_categories,
        auth: state.auth.user,
    };
};
export default connect(mapStateToProps, { fatchAllData, allFetchData })(GetMyTutorialDetails);