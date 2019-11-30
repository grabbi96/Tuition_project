import { SET_COMMONSYNC } from '../actions/actionTypes'

const init = {
    commonSync: {}
}

const commonSync = (store = init, action) => {
    switch (action.type) {
        case SET_COMMONSYNC: {
            return {
                ...store,
                commonSync: action.payload
            }
        }
        default: return store
    }
}

export default commonSync