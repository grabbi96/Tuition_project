import { SET_STUDY, SET_TUITIONS, SET_INSTITUTION, GET_TUITION_USERS, SET_SKILLS } from '../actions/actionTypes'
const init = {
    study: [],
    tuitions: [],
    institutions: [],
    tuitionUsers: [],
    skills: []
}
const studyReducer = (store = init, action) => {
    switch (action.type) {
        case SET_STUDY: {
            return {
                ...store,
                study: action.payload.study
            }
        }
        case SET_TUITIONS: {
            return {
                ...store,
                tuitions: action.payload.tuitions
            }
        }
        case SET_SKILLS: {
            return {
                ...store,
                skills: action.payload.skills
            }
        }
        case SET_INSTITUTION: {
            return {
                ...store,
                institutions: action.payload.institution
            }
        }
        case GET_TUITION_USERS: {
            return {
                ...store,
                tuitionUsers: action.payload.tuitionUsers
            }
        }
        default: return store
    }

}

export default studyReducer