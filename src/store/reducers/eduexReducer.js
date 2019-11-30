
import { GET_EDUCATION, GET_CONTRIBUTION, GET_TUTORIAL_LIST, GET_EXPERIENCE, GET_TUTORIAL, GET_TRAINING, GET_ADMIN_TUITION, GET_REQUEST_TUITION } from '../actions/actionTypes'
const init = {
    educations: [],
    experiences: [],
    tutorials: [],
    trainings: [],
    adminTuitions: [],
    requestTuitions: [],
    tutorialsList: []
}

const eduexReducer = (store = init, action) => {


    switch (action.type) {
        case GET_EDUCATION: {
            return {
                ...store,
                educations: action.payload.education
            }
        }
        case GET_EXPERIENCE: {
            return {
                ...store,
                experiences: action.payload.experience
            }
        }
        case GET_TUTORIAL: {
            return {
                ...store,
                tutorials: action.payload.tutorials
            }
        }
        case GET_TUTORIAL_LIST: {
            return {
                ...store,
                tutorialsList: action.payload.tutorials
            }
        }
        case GET_TRAINING: {
            return {
                ...store,
                trainings: action.payload.trainings
            }
        }
        case GET_ADMIN_TUITION: {
            return {
                ...store,
                adminTuitions: action.payload.adminTuitions
            }
        }
        case GET_REQUEST_TUITION: {
            return {
                ...store,
                requestTuitions: action.payload.requestTuitions
            }
        }
        default: return store
    }

}

export default eduexReducer