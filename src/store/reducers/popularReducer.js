
import { GET_POPULAR, GET_POPULAR_TABLE } from '../actions/actionTypes'
const init = {
    popular: [],
    popularTable: []
}

const popularReducer = (store = init, action) => {


    switch (action.type) {
        case GET_POPULAR: {
            return {
                ...store,
                popular: action.payload.popular
            }
        }
        case GET_POPULAR_TABLE: {
            return {
                ...store,
                popularTable: action.payload.popularTable
            }
        }
        default: return store
    }

}

export default popularReducer