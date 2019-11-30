import axios from 'axios'
import { SET_USER } from './actionTypes'
import { setToastMessage, loading } from "./metaActions"
import { setError } from "./errorAction"
import setAuthToken from "../utils/setAuthToken"
import { fatchAllData } from "./category"
import store from "../index"
import { resolvePtr } from 'dns';
export const login = (user, history) => dispatch => {
    console.log(user);
    dispatch(loading(true))
    axios.post("http://anytuition.com/anytuition/public/api/v1/login", user)
        .then(result => {
            // let { access_token, token_type } = result.data
            if (result.data.errorMsg) {
                dispatch(setError({ errors: result.data.errorMsg }))
                dispatch(loading(false))
            }
            console.log(result)
            if (result.data.data.users) {

                let user = result.data.data.users;
                if (user.type == 1) {
                    let token = user.api_token;
                    let strinUser = JSON.stringify(user)

                    localStorage.setItem("auth_token", strinUser)
                    setAuthToken(token)
                    dispatch(setUser(user))
                    dispatch(setToastMessage('Login successfully'))
                    history.push('/teacher_profile')
                }

                if (user.type == 2) {
                    let token = user.api_token;
                    let strinUser = JSON.stringify(user)

                    localStorage.setItem("auth_token", strinUser)
                    setAuthToken(token)
                    dispatch(setUser(user))
                    dispatch(setToastMessage('Login successfully'))
                    history.push('/guardian_profile')
                }

                dispatch(fatchAllData())



            }

            // store.dispatch(fatchAllData())
            // axios.post("/api/auth/me")
            //     .then(user => {
            //         dispatch(setUser(user.data))
            //         dispatch(setError())
            //         dispatch(loading(false))
            //         history.push("/profile")
            //     })
            //     .catch(error => {
            //         console.log(error.response)
            //     })
        })
        .catch(err => {
            // let {error} = err.response.data
            // dispatch(loading(false))
            console.log(err)

            // console.log(err)
            // dispatch(setError({errors:error}))
        })

}

export const registration = (data, history) => dispatch => {
    console.log(data);
    dispatch(loading(true))


    axios.post('http://anytuition.com/anytuition/public/api/v1/signUp', data)
        .then(function (response) {
            console.log(response);
            if (response.data.errorMsg) {
                dispatch(setError({ errors: response.data.errorMsg }))
                dispatch(loading(false))
            } else {
                dispatch(setToastMessage('Account created successfully'))
                dispatch(loading(false))
                history.push('/login')
            }
        })
        .catch(function (error) {
            console.log(3432535345345353534345345345);
            console.log(error);
        });



}
export const hireRegistration = (data, history) => dispatch => {
    console.log(data);
    dispatch(loading(true))


    axios.post('http://anytuition.com/anytuition/public/api/v1/signuptuition', data)
        .then(function (response) {
            console.log(response);
            if (response.data.errorMsg) {
                dispatch(setError({ errors: response.data.errorMsg }))
                dispatch(loading(false))
            } else {
                dispatch(setToastMessage('Account created successfully'))
                dispatch(loading(false))
                history.push('/login')
            }
        })
        .catch(function (error) {
            console.log(3432535345345353534345345345);
            console.log(error);
        });



}
export const logout = history => dispatch => {
    dispatch(setUser())
    localStorage.removeItem("auth_token")
    history.push("/login")
}
export const setUser = user => ({
    type: SET_USER,
    payload: { user: user ? user : {} }
});