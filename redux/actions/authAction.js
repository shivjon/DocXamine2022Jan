
export const REGISTER_USER_FAIL = "REGISTER_USER_FAIL";
export const REGISTER_USER_SUCCESS ="REGISTER_USER_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const MERCHANTKEY_SUCCESS = 'MERCHANTKEY_SUCCESS';
// export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER_AUTH_SUCCESS = 'LOGIN_USER_AUTH_SUCCESS';
export const OFFLINE_STATUS = "OFFLINE_STATUS";
export const OTP_USER_SUCCESS = "OTP_USER_SUCCESS";
export const OTP_USER_FAIL = "OTP_USER_FAIL";
export const RESEND_OTP_USER_SUCCESS = "RESEND_OTP_USER_SUCCESS";
export const RESEND_OTP_USER_FAIL = "RESEND_OTP_USER_FAIL";
export const ARE_YOU_A_SUCCESS = "ARE_YOU_A_SUCCESS";
export const ARE_YOU_A_FAIL = "ARE_YOU_A_FAIL";
export const CREATE_DOCTOR_PROFILE_SUCCESS = "CREATE_DOCTOR_PROFILE_SUCCESS";
export const CREATE_DOCTOR_PROFILE_FAIL = "CREATE_DOCTOR_PROFILE_FAIL";
export const IMAGE_UP_SUCCESS = "IMAGE_UP_SUCCESS";
export const IMAGE_UP_FAIL = "IMAGE_UP_FAIL";

import axios from "axios";

const BASE_URL = 'https://backend.docxamine.com/api';
// const BASE_URL = 'http://192.168.43.190:3002/api/users';

//createDoctorProfile
export const uploadImage = (formData, token) => {
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios({
        method: 'POST',
        url: `${BASE_URL}/upload`,
        data: formData,
        headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
        'Authorization': token
        },
      })
        .then(function (response) {
        console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: IMAGE_UP_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: IMAGE_UP_FAIL,
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

export const createDoctorProfile = (authData, token) => {
    console.log(authData)
    var result = [];
    var data = JSON.stringify(
        authData
      );
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await   axios.post(`${BASE_URL}/createDoctorProfile`,data,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'Authorization': token
        },
        })
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: CREATE_DOCTOR_PROFILE_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: CREATE_DOCTOR_PROFILE_FAIL,
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

export const resendOTP = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/resendOTP`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: RESEND_OTP_USER_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: RESEND_OTP_USER_FAIL,
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

export const whoAreYou = (authData, token) => {
    console.log(authData)
    var result = [];
    var data = JSON.stringify(
        authData
      );
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await   axios.post(`${BASE_URL}/whoAreYou`,data,{
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'Authorization': token
        },
        })
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: ARE_YOU_A_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: ARE_YOU_A_FAIL,
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

export const verifyOtp = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/verifyOtp`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: OTP_USER_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: OTP_USER_FAIL,
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

export const UserAuth = (authData) => {
    var result = false;
    return async dispatch => {
            dispatch({
                type: LOGIN_USER_AUTH_SUCCESS,
                payload: authData
            });
            result = true;
        return result;
    }
}


export const offlineStatus = (status) =>{
    console.log('offline status action called')
    return {
        type: OFFLINE_STATUS,
        payload: status
    }
}
