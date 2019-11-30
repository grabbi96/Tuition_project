import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactCountdownClock from "react-countdown-clock"
import { MDBContainer, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter } from "mdbreact"
class Quiz extends Component {
    state = {
        questionOne: "",
        percentage: [],
        marks: 0,
        modal: false
    }

    componentDidMount() {
        // let arra1 = this.props.quiz
        // var ctr = arra1.length, temp, index;

        // // While there are elements in the array
        // while (ctr > 0) {
        //     // Pick a random index
        //     index = Math.floor(Math.random() * ctr);
        //     // Decrease ctr by 1
        //     ctr--;
        //     // And swap the last element with it
        //     temp = arra1[ctr];
        //     arra1[ctr] = arra1[index];
        //     arra1[index] = temp;
        // }




        // let tenItems = arra1.slice(0, 10)
        // console.log(tenItems)
        // this.setState({
        //     quiz: tenItems
        // })



    }
    changeHandler = (e, index) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        let checking = this.state.percentage.find(ppp => ppp === e.target.name)

        if (!checking) {
            this.setState({
                percentage: this.state.percentage.concat(e.target.name)
            })
        }

        if (index == e.target.value) {
            this.setState({
                marks: this.state.marks + 1
            })
        }

        console.log(index, e.target.value)

        // }


        // if (!checking) {
        //     if (this.state.quiz[index].answer == e.target.value) {
        //         this.setState({
        //             marks: this.state.marks + 1
        //         })
        //     } else {
        //         this.setState({
        //             marks: this.state.marks - 1
        //         })
        //     }
        // }

        // console.log(this.state.percentage)
        // console.log(e.target.name)
        // console.log(checking)



    }
    myCallback = () => {
        this.toggle()
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    submitHandler = () => {
        this.toggle()
    }
    render() {
        console.log(this.props.answers)
        console.log(this.props.questions)
        let stayle = {
            width: (this.state.percentage.length) * 10 + "%"
        }
        return (
            <div className="quiz-section">
                <ReactCountdownClock seconds={70}
                    color="#6664d4"
                    alpha={0.9}
                    size={100}
                    onComplete={this.myCallback} />
                <MDBContainer>
                    {/* <MDBBtn onClick={this.toggle}>Modal</MDBBtn> */}
                    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                        <MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
                        <MDBModalBody>
                            <h2>Total marks {this.state.marks}</h2>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                            <MDBBtn color="primary">Save changes</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </MDBContainer>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style={stayle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{(this.state.percentage.length) * 10 + "%"}%</div>
                </div>
                {/* {this.state.quiz && (
                    this.state.quiz.map((q, index) => {
                        return (
                            <div className="quiz-item">
                                <h6>
                                    {q.question}
                                </h6>

                                <form action="">
                                    {q.options.map((o, i) => {
                                        return (
                                            <div class="custom-control custom-radio">
                                                <input
                                                    type="radio"
                                                    // id="customRadio1"
                                                    id={index + "customRadio" + i}
                                                    class="custom-control-input"
                                                    name={q.name}
                                                    value={o.value}
                                                    onChange={(e) => this.changeHandler(e, index)}
                                                />
                                                <label class="custom-control-label" for={index + "customRadio" + i}>
                                                    {o.label}
                                                </label>
                                            </div>
                                        )
                                    })}
                                </form>
                            </div>
                        )
                    })
                )} */}


                {this.props.questions && this.props.questions.map((qt, index) => {
                    let options = this.props.answers.filter(an => an.question_id == qt.id)
                    console.log(options)
                    //  == qt.id ? an : null
                    return (
                        <div className="quiz-item">
                            <h6>
                                {qt.title}
                            </h6>

                            <form action="">
                                {options.map((o, i) => {
                                    console.log(o)
                                    return (
                                        <div class="custom-control custom-radio">
                                            <input
                                                type="radio"
                                                id={index + "customRadio" + i}
                                                class="custom-control-input"
                                                name={qt.title}
                                                value={o.id}
                                                onChange={(e) => this.changeHandler(e, qt.answer_id)}
                                            />
                                            <label class="custom-control-label" for={index + "customRadio" + i}>
                                                {o.title}
                                            </label>
                                        </div>
                                    )
                                })}
                            </form>
                        </div>
                    )
                })}




                <div className="text-center">
                    <button type="submit" class="theme-solid-button sm">
                        Submit
                  </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        answers: state.quiz.answers,
        questions: state.quiz.questions
    }
}
export default connect(mapStateToProps)(Quiz);