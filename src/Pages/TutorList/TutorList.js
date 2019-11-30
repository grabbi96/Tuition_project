import React, { Component } from 'react';
import { Link } from "react-router-dom"
import teacher from "../../assets/images/teacher.jpg";
import { connect } from 'react-redux';
import "./TutorList.css"
class TutorList extends Component {
    state = {
        filterTutors: null
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

        let filterTutors = this.props.tutors.filter(tt => tt.division_id == val)
        this.setState({
            filterTutors
        })
        console.log(filterTutors)
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
        let filterTutors = this.props.tutors.filter(tt => tt.district_id == val)
        this.setState({
            filterTutors
        })
    }
    areaHandler = e => {
        let val = e.target.value;
        let filterTutors = this.props.tutors.filter(tt => tt.areas == val)
        this.setState({
            filterTutors
        })
    }
    mediumHandler = e => {
        let val = e.target.value;
        let filterTutors = this.props.tutors.filter(tt => tt.media == val)
        this.setState({
            filterTutors
        })
    }
    classHandler = e => {
        let val = e.target.value;
        let filterTutors = this.props.tutors.filter(tt => tt.class == val)
        this.setState({
            filterTutors
        })
    }
    institutionHandler = e => {
        let val = e.target.value;
        let filterTutors = this.props.tutors.filter(tt => tt.institution_id == val)
        this.setState({
            filterTutors
        })
    }
    genderHandler = val => {
        let filterTutors = this.props.tutors.filter(tt => tt.gender == val)
        this.setState({
            filterTutors
        })
    }
    searchHandler = (event) => {
        var updatedList = this.props.tutors;
        updatedList = updatedList.filter(function (item) {
            return item.subjects.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({
            filterTutors: updatedList
        })
    }

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
            // let dd = this.props.com.areas.find(d => d.id == val)
            // if (dd) {
            //     return dd.title
            // }

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
    render() {
        let divisions, mediums, classes, subjects, facilities, learnings, institutions;
        if (this.props.com) {
            divisions = this.props.com.divisions
            mediums = this.props.com.media
            classes = this.props.com.classes
            subjects = this.props.com.subjects
            facilities = this.props.com.facilities
            learnings = this.props.com.learnings
            institutions = this.props.institutions

        }
        console.log(this.props.tutorLists)
        return (
            <section className="section-padding-20 tutors-section">

                <div className="container">

                    <div class="row">
                        <div class="tutorial-search-header">
                            <div class="row">


                                <div class="col-lg-12">
                                    <div class="search-category tutor-list">
                                        <div class="input-group mb-3">
                                            <select class="custom-select" id="inputGroupSelect01" onChange={this.divisionHandler}>
                                                <option selected>Select: </option>
                                                {divisions && divisions.map(dv => (
                                                    <option value={dv.id}>{dv.title}</option>
                                                ))}

                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <select class="custom-select" id="inputGroupSelect01" onChange={this.districtHandler}>
                                                <option selected>Select: </option>
                                                {this.state.districts && this.state.districts.map(ds => {
                                                    return (
                                                        <option value={ds.id}>{ds.title}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01" name="area" onChange={this.areaHandler}>
                                                <option selected>Select: </option>
                                                {this.state.areas && this.state.areas.map(ds => {
                                                    console.log(ds)
                                                    return (
                                                        <option value={ds.id}>{ds.title}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01" name="medium_id" onChange={this.mediumHandler}>
                                                <option value=""> Select Medium </option>
                                                {mediums && mediums.map(dv => (
                                                    <option value={dv.id}>{dv.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01" name="class_id" onChange={this.classHandler}>
                                                <option selected>Select Class:</option>
                                                {classes && classes.map(dv => (
                                                    <option value={dv.id}>{dv.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01" name="categorySub" onChange={this.institutionHandler}>
                                                <option>Institution</option>
                                                {institutions && institutions.map(dv => (
                                                    <option value={dv.id}>{dv.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 m-auto">
                                    <div class="input-group search-input mb-3">
                                        <input
                                            type="text"
                                            class="form-control"
                                            aria-label="Large"
                                            aria-describedby="inputGroup-sizing-sm"
                                            placeholder="Search Tutors By Any Key"
                                            onChange={this.searchHandler}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>



                        <div className={this.state.filterTutors ? "d-none" : "d"}>
                            <div className="row three-row home-find-tutor">

                                {this.props.tutors && this.props.tutors.map(t => {
                                    let user = this.props.tutorLists.find(tl => tl.id == t.user_id)
                                    let subjectAll = t.subjects.split(",")
                                    let subArray = []
                                    subjectAll.map(sj => {
                                        if (subjects) {
                                            let subject = subjects.find(sjs => sjs.id == sj);
                                            subArray.push(subject.title)
                                        }

                                    })
                                    let finalSub = subArray.join(", ")

                                    return (<div className="col-md-4">
                                        <div class="team-item z-depth-1">
                                            <div class="team-thumb">
                                                {user.image && (
                                                    <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + user.image} alt="main" />
                                                )}

                                                {!user.image && (
                                                    <img src={teacher} alt="teacher" />
                                                )}


                                            </div>
                                            <div class="team-contant">
                                                <h3>{user.name}</h3>
                                                <div className="team-content-overlay">
                                                    <h4>{this.findMedium(t.media)}</h4>
                                                    <p>{finalSub}</p>
                                                    <ul class="developer-s-info">
                                                        <li>
                                                            <p>Salary:</p> <span>{t.salary}</span>
                                                        </li>
                                                        <li>
                                                            <p>Division:</p> <span>{this.findDivision(t.division_id)}</span>
                                                        </li>
                                                        <li>
                                                            <p>District:</p> <span>{this.findDistrict(t.district_id)}</span>
                                                        </li>
                                                        <li>
                                                            <p>Area:</p> <span>{this.findArea(t.areas)}</span>
                                                        </li>
                                                        <li>
                                                            <p>Institution:</p> <span>{this.findInstitution(t.institution_id)}</span>
                                                        </li>
                                                    </ul>
                                                    <Link to={"/tutor/details/" + t.id} className="btn sm white">
                                                        View Details
                                                 </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )



                                })}
                            </div>


                        </div>







                        <div className={!this.state.filterTutors ? "d-none" : "d"}>
                            <div className="row three-row home-find-tutor">

                                {this.props.tutors && this.props.tutors.map(t => {
                                    let user = this.props.tutorLists.find(tl => tl.id == t.user_id)
                                    let subjectAll = t.subjects.split(",")
                                    let subArray = []
                                    subjectAll.map(sj => {
                                        if (subjects) {
                                            let subject = subjects.find(sjs => sjs.id == sj);
                                            subArray.push(subject.title)
                                        }

                                    })
                                    let finalSub = subArray.join(", ")

                                    return (<div className="col-md-4">
                                        <div class="team-item z-depth-1">
                                            <div class="team-thumb">
                                                {user.image && (
                                                    <img src={"https://s3.ap-south-1.amazonaws.com/mahtab/" + user.image} alt="main" />
                                                )}

                                                {!user.image && (
                                                    <img src={teacher} alt="teacher" />
                                                )}


                                            </div>
                                            <div class="team-contant">
                                                <h3>{user.name}</h3>
                                                <div className="team-content-overlay">
                                                    <h4>{this.findMedium(t.media)}</h4>
                                                    <p>{finalSub}</p>
                                                    <ul class="developer-s-info">
                                                        <li>
                                                            <p>Salary:</p> <span>{t.salary}</span>
                                                        </li>
                                                        <li>
                                                            <p>Division:</p> <span>{this.findDivision(t.division_id)}</span>
                                                        </li>
                                                        <li>
                                                            <p>District:</p> <span>{this.findDistrict(t.district_id)}</span>
                                                        </li>
                                                        <li>
                                                            <p>Area:</p> <span>{this.findArea(t.areas)}</span>
                                                        </li>
                                                        <li>
                                                            <p>Institution:</p> <span>{this.findInstitution(t.institution_id)}</span>
                                                        </li>
                                                    </ul>
                                                    <Link to={"/tutor/details/" + t.id} className="btn sm white">
                                                        View Details
                                                 </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )



                                })}
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
        tutors: state.tutor.activeTutor,
        tutorLists: state.tutor.tutor,
        error: state.error,
        tuitions: state.study.tuitions,
        auth: state.auth.user,
        com: state.comm.commonSync,
        institutions: state.study.institutions
    };
};
export default connect(mapStateToProps)(TutorList);