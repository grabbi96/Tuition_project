import { LOADING_STATE,  SET_TOAST_MESSAGE } from '../actions/actionTypes'
const init = {
    isLoading:false,
    toastMessage:''
}
const metaReducer = (store = init, action)=>{
    switch(action.type){
        case LOADING_STATE:{
            return {
                ...store,
                isLoading:action.payload.loading
            }
        }
        case SET_TOAST_MESSAGE:{
            return {
                ...store, 
                toastMessage:action.payload.toastMessage
            }
        }
        default:return store
    }
    
}

export default metaReducer