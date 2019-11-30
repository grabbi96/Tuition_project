import { combineReducers } from 'redux'
import authReducer from './authReducer'
import metaReducer from './metaReducer'
import errorReducer from './errorReducer'
import eduexReducer from "./eduexReducer"
import commonSync from "./commonSync"
import quizReducer from "./quizReducer"
import booksReducer from "./booksReducer"
import tutorReducer from "./tutorReducer"
import studyReducer from "./StudyReducer"
import popularReducer from "./popularReducer"
const rootReducer = combineReducers({
    auth: authReducer,
    meta: metaReducer,
    error: errorReducer,
    edu: eduexReducer,
    comm: commonSync,
    quiz: quizReducer,
    books: booksReducer,
    tutor: tutorReducer,
    study: studyReducer,
    popular: popularReducer
})


export default rootReducer