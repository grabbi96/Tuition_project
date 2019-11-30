import { SET_TOAST_MESSAGE, LOADING_STATE } from "./actionTypes"


export const setToastMessage = message => ({
    type:SET_TOAST_MESSAGE,
    payload:{toastMessage:message}
})

export const loading = data => ({
    type:LOADING_STATE,
    payload:{loading:data}
})