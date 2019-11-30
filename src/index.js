import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store/index";
import axios from "axios";

import setAuthToken from './store/utils/setAuthToken';
import { setUser } from './store/actions/authAction';
import { SET_COMMONSYNC } from "./store/actions/actionTypes"
import { fatchAllData, allFetchData } from "./store/actions/category"
import { setCart } from "./store/actions/eventAction"

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['Accept'] = 'application/json';


axios.post('http://anytuition.com/anytuition/public/api/v1/commonSync', { authentication: 'Tuition.app' })
    .then(data => {
        console.log(data.data.data)
        store.dispatch({ type: SET_COMMONSYNC, payload: data.data.data })
    })

let user = localStorage.getItem('auth_token');
if (user) {
    user = JSON.parse(user)
    console.log(user)

    setAuthToken(user.api_token);
    store.dispatch(setUser(user));
    store.dispatch(fatchAllData())
    store.dispatch(setCart())
}

store.dispatch(allFetchData())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
