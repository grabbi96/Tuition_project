import {CATCH_ERROR} from "./actionTypes"

export const setError = error => ({
    type:CATCH_ERROR,
    payload:{error:error ? error: ""}
})