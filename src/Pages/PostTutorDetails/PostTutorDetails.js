import React, { Component } from 'react';
import Profile from "../../assets/images/profile.png";
import Axios from 'axios';
import { connect } from 'react-redux';
import Spinner from "../../Components/Spinner"
import { Link } from "react-router-dom"
class PostTutorDetails extends Component {
    state = {}

    findDivision = (val) => {
        if (this.props.com.divisions) {
            let dd = this.props.com.divisions.find(d => d.id == val)
            // 
            if (dd) {
                return dd.title
            }
            console.log(val)
        }


    }
    findDistrict = (val) => {
        if (this.props.com.districts) {
            let dd = this.props.com.districts.find(d => d.id == val)
            if (dd) {
                return dd.title
            }
        }
    }
    findArea = (val) => {
        if (this.props.com.areas) {
            let subjectAll = val.split(",")
            let subArray = []
            subjectAll.map(sj => {
                if (this.props.com.areas) {
                    let subject = this.props.com.areas.find(sjs => sjs.id == sj);
                    subArray.push(subject.title)
                }

            })
            let finalSub = subArray.join(",      ")
            return finalSub
        }
    }
    findMedium = val => {
        if (this.props.com.media) {
            let dd = this.props.com.media.find(d => d.id == val)
            if (dd) {
                return dd.title
            }
        }
    }
    findSubject = val => {
        console.log(val)
        if (this.props.com.subjects) {
            let dd = this.props.com.subjects.find(d => d.id == val)
            if (dd) {
                return dd.title
            }
        }
    }
    findClass = val => {
        if (this.props.com.classes) {
            let dd = this.props.com.classes.find(d => d.id == val)
            if (dd) {
                return dd.title
            }
        }
    }
    findInstitution = val => {
        if (this.props.institutions) {
            let dd = this.props.institutions.find(d => d.id == val)
            if (dd) {
                return dd.title
            }
        }
    }
    findSubjects = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.com.subjects) {
                let subject = this.props.com.subjects.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }

    findMediums = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.com.media) {
                let subject = this.props.com.media.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }
    findClasses = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.com.classes) {
                let subject = this.props.com.classes.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }
    findFacilities = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.com.facilities) {
                let subject = this.props.com.facilities.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }

    findLearnings = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.com.learnings) {
                let subject = this.props.com.learnings.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }
    findSkills = val => {
        let subjectAll = val.split(",")
        let subArray = []
        subjectAll.map(sj => {
            if (this.props.skills) {
                let subject = this.props.skills.find(sjs => sjs.id == sj);
                subArray.push(subject.title)
            }

        })
        let finalSub = subArray.join(",      ")
        return finalSub
    }
    render() {
        let tutor, user
        if (this.props.tutors) {
            tutor = this.props.tutors.find(tur => tur.id == this.props.match.params.id)
            if (tutor) {
                user = this.props.tutorLists.find(ttl => ttl.id == tutor.user_id)
            }
            // 
            console.log(user)
        }


        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile-left">

                                {user && user.image && (
                                    <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + user.image} alt="main" />
                                )}
                                {!user && (
                                    <img src={Profile} alt="asdf" />
                                )}
                                < ul >
                                    <li>
                                        <h4>{user && user.name}</h4>
                                    </li>
                                </ul>
                                {user && <Link class="theme-line-button hhh" to={"/tutor_list/" + user.id}><i class="fa fa-pencil"></i> View Profile</Link>}

                            </div>
                        </div>

                        <div className="col-md-9">
                            <div class="udb">
                                <div class="udb-sec udb-prof">
                                    <h4> Tutor Details</h4>
                                    <div class="sdb-tabl-com sdb-pro-table">
                                        <ul className="default-value-ul">
                                            <li className="default-colum">
                                                <span className="colum-name">District:</span>
                                                <span className="colum-value">{tutor && this.findDistrict(tutor.district_id)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Division:</span>
                                                <span className="colum-value">{tutor && this.findDivision(tutor.division_id)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Area:</span>
                                                <span className="colum-value">{tutor && this.findArea(tutor.areas)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Institution:</span>
                                                <span className="colum-value">{tutor && this.findInstitution(tutor.institution_id)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Subjects:</span>
                                                <span className="colum-value">{tutor && this.findSubjects(tutor.subjects)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Medium:</span>
                                                <span className="colum-value">{tutor && this.findMediums(tutor.media)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Class:</span>
                                                <span className="colum-value">{tutor && this.findClasses(tutor.class)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">facilities:</span>
                                                <span className="colum-value">{tutor && this.findFacilities(tutor.facilities)}</span>
                                            </li>


                                            <li className="default-colum">
                                                <span className="colum-name">Learnings:</span>
                                                <span className="colum-value">{tutor && this.findLearnings(tutor.learnings)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Skills:</span>
                                                <span className="colum-value">{tutor && this.findSkills(tutor.skills)}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">Gender:</span>
                                                <span className="colum-value">{tutor && tutor.gender}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">salary:</span>
                                                <span className="colum-value">{tutor && tutor.salary}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">days_per_week:</span>
                                                <span className="colum-value">{tutor && tutor.days_per_week}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">extra_facilities:</span>
                                                <span className="colum-value">{tutor && tutor.extra_facilities}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">no_of_student:</span>
                                                <span className="colum-value">{tutor && tutor.no_of_student}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">available_time:</span>
                                                <span className="colum-value">{tutor && tutor.available_time}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">tuition_email:</span>
                                                <span className="colum-value">{tutor && tutor.tuition_email}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">teaching_time:</span>
                                                <span className="colum-value">{tutor && tutor.teaching_time}</span>
                                            </li>

                                            <li className="default-colum">
                                                <span className="colum-name">education:</span>
                                                <span className="colum-value">{tutor && tutor.education}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">experience_year:</span>
                                                <span className="colum-value">{tutor && tutor.experience_year}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">additional_experience:</span>
                                                <span className="colum-value">{tutor && tutor.additional_experience}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">student_gender:</span>
                                                <span className="colum-value">{tutor && tutor.student_gender}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">bonus_benefit:</span>
                                                <span className="colum-value">{tutor && tutor.bonus_benefit}</span>
                                            </li>
                                            <li className="default-colum">
                                                <span className="colum-name">publish_date:</span>
                                                <span className="colum-value">{tutor && tutor.publish_date}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>
            </section >
        );
    }
}

const mapStateToProps = state => {
    return {
        tutors: state.tutor.activeTutor,
        error: state.error,
        tutorLists: state.tutor.tutor,
        tuitions: state.study.tuitions,
        auth: state.auth.user,
        com: state.comm.commonSync,
        institutions: state.study.institutions,
        skills: state.study.skills
    };
};
export default connect(mapStateToProps)(PostTutorDetails);  