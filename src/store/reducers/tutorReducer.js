import { SET_TUTOR, SET_ACTIVE_TUTOR } from '../actions/actionTypes'
const init = {
    tutor: [],
    activeTutor: []
}
const metaReducer = (store = init, action) => {
    switch (action.type) {
        case SET_TUTOR: {
            return {
                ...store,
                tutor: action.payload.tutor
            }
        }
        case SET_ACTIVE_TUTOR: {
            return {
                ...store,
                activeTutor: action.payload.activeTutor
            }
        }
        default: return store
    }

}

export default metaReducer