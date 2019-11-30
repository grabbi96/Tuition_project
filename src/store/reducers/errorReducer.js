import { CATCH_ERROR } from '../actions/actionTypes'
const init = {
    
}


const errorReducer = (state =init, action)=>{
    switch(action.type){
        case CATCH_ERROR:{
            return{
                ...action.payload.error
            }
        }
        default:return state
    }
}

export default errorReducer