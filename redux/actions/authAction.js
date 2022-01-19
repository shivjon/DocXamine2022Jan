
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const REGISTER_USER_SUCCESS ="REGISTER_USER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const MERCHANTKEY_SUCCESS = 'MERCHANTKEY_SUCCESS';
// export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER_AUTH_SUCCESS = 'LOGIN_USER_AUTH_SUCCESS';
export const OFFLINE_STATUS = "OFFLINE_STATUS";

import axios from "axios";

const BASE_URL = 'https://backend.docxamine.com/api';
// const BASE_URL = 'http://192.168.43.190:3002/api/users';



export const Login = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/Login`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: LOGIN_FAIL,
                payload: response.data.status
            });
        }
      
        })
        .catch(function (error) {
            result = {status:400, message:"Something went wrong."}
            console.log(error);
        });

        return result;
    }
}

export const registerUser = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/signup`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: response.data.status
            });
        }
      
        })
        .catch(function (error) {
        console.log(error);
        });

        return result;
    }
}


// export const FCMToken = (token) => {
//     var result = false;
//     return async dispatch => {
//             dispatch({
//                 type: FCM_TOKEN_SUCCESS,
//                 payload: token
//             });
//             result = true;
      
      
//         return result;
//     }
// }

export const offlineStatus = (status) =>{
    console.log('offline status action called')
    return {
        type: OFFLINE_STATUS,
        payload: status
    }
}
