import { GET_CATEGORY, GET_CONTRIBUTION, GET_EXPERIENCE, SET_BOOKS_SUB_CATEGORY, SET_ACTIVE_TUTOR, SET_SKILLS, SET_BOOKS_CATEGORY, GET_TUITION_USERS, SET_INSTITUTION, GET_EDUCATION, GET_TUTORIAL_LIST, SET_BOOKS, GET_TUTORIAL, GET_POPULAR, GET_TRAINING, SET_TUTOR, SET_QUESTION, SET_ANSWER, SET_STUDY, GET_ADMIN_TUITION, GET_REQUEST_TUITION, SET_TUITIONS, GET_POPULAR_TABLE } from "./actionTypes"
import Axios from "axios"
import { setUser } from "./authAction"
import store from '../index'
export const fatchAllData = () => dispatch => {

    Axios.post('http://anytuition.com/anytuition/public/api/v1/educations/list', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_EDUCATION, payload: { education: result.data.data.education } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/experiences/list', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_EXPERIENCE, payload: { experience: result.data.data.experiences } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/trainings/list', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_TRAINING, payload: { trainings: result.data.data.trainings } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/questions', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: SET_QUESTION, payload: { questions: result.data.data.questions } })
            dispatch({ type: SET_ANSWER, payload: { answers: result.data.data.answers } })
        })
    Axios.post('http://anytuition.com/anytuition/public/api/v1/tutorials/list', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_TUTORIAL_LIST, payload: { tutorials: result.data.data } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/tuitions/list', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_REQUEST_TUITION, payload: { requestTuitions: result.data.data.tuitions } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/tuitions/users', { authentication: 'Tuition.app', api_token: store.getState().auth.user.api_token })
        .then(result => {
            dispatch({ type: GET_TUITION_USERS, payload: { tuitionUsers: result.data.data.tuitions } })
        })
}

export const allFetchData = () => dispatch => {
    Axios.post('http://anytuition.com/anytuition/public/api/v1/books', { authentication: 'Tuition.app' })
        .then(result => {
            console.log(result)
            dispatch({ type: SET_BOOKS, payload: { books: result.data.data.books } })
            dispatch({ type: SET_BOOKS_CATEGORY, payload: { category: result.data.data.book_categories } })
            dispatch({ type: SET_BOOKS_SUB_CATEGORY, payload: { subCategory: result.data.data.book_subcategories } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/users/tutors', { authentication: 'Tuition.app' })
        .then(result => {
            console.log(result.data)
            dispatch({ type: SET_TUTOR, payload: { tutor: result.data.data.users } })
        })


    Axios.post('http://anytuition.com/anytuition/public/api/v1/studyabroads', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: SET_STUDY, payload: { study: result.data.data.study_abroads } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/tuitions', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: SET_TUITIONS, payload: { tuitions: result.data.data.tuitions } })
            dispatch({ type: SET_SKILLS, payload: { skills: result.data.data.skills } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/admin/tuitions', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: GET_ADMIN_TUITION, payload: { adminTuitions: result.data.data.admin_tuitions } })

        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/tutorials', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: GET_TUTORIAL, payload: { tutorials: result.data.data } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/populars', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: GET_POPULAR, payload: { popular: result.data.data } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/popular/offers', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: GET_POPULAR_TABLE, payload: { popularTable: result.data.data.popular_offers } })
        })
    Axios.post('http://anytuition.com/anytuition/public/api/v1/institutions', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: SET_INSTITUTION, payload: { institution: result.data.data.institutions } })
        })

    Axios.post('http://anytuition.com/anytuition/public/api/v1/tutors ', { authentication: 'Tuition.app' })
        .then(result => {
            dispatch({ type: SET_ACTIVE_TUTOR, payload: { activeTutor: result.data.data.tutors } })
        })
}