
export const GET_CURRENCY = "GET_CURRENCY";
export const GET_CURRENT_COUNRTY_SUCCESS = "GET_CURRENT_COUNRTY_SUCCESS";
export const GET_CURRENT_COUNRTY_FAIL = "GET_CURRENT_COUNRTY_FAIL";
export const UPDATE_COUNTRY_CODE_SUCCESS = "UPDATE_COUNTRY_CODE_SUCCESS";
export const UPDATE_COUNTRY_CODE_FAIL = "UPDATE_COUNTRY_CODE_FAIL";
export const GET_AGORA_SUCCESS = "GET_AGORA_SUCCESS";
export const GET_AGORA_FAIL = "GET_AGORA_FAIL";
export const GET_CUSTOMER_LIST_SUCCESS = "GET_CUSTOMER_LIST_SUCCESS";
export const GET_CUSTOMER_LIST_FAIL = "GET_CUSTOMER_LIST_FAIL";
export const CHNAGE_ORDER_STATUS_SUCCESS ='CHNAGE_ORDER_STATUS_SUCCESS';
export const CHNAGE_ORDER_STATUS_FAIL = "CHNAGE_ORDER_STATUS_FAIL";
export const ON_SEND_NOTIFICATION_SUCCESS = "ON_SEND_NOTIFICATION_SUCCESS";
export const ON_SEND_NOTIFICATION_FAIL = "ON_SEND_NOTIFICATION_FAIL";
export const SELECT_EVENT_CATEGORY_SUCCESS = "SELECT_EVENT_CATEGORY_SUCCESS";
export const SELECT_EVENT_CATEGORY_FAIL = "SELECT_EVENT_CATEGORY_FAIL";
export const EVENT_LIVE_ADD_SUCCESS = "EVENT_LIVE_ADD_SUCCESS";
export const EVENT_LIVE_ADD_FAIL = "EVENT_LIVE_ADD_FAIL";
export const SELECT_EVENT_DETAILS_SUCCESS = "SELECT_EVENT_DETAILS_SUCCESS";
export const SELECT_EVENT_DETAILS_FAIL = "SELECT_EVENT_DETAILS_FAIL";

import axios from "axios";
export const S3_IMAGE = "https://bharat-darshan-vod-input-723366556862.s3.amazonaws.com/";
import WooCommerceAPI from 'react-native-woocommerce-api';
const BASE_URL = 'https://api.bharatdarshan.app/api/users';
// const BASE_URL = 'http://192.168.43.190:3002/api/users';
//SelectEventDetails
export const SelectEventDetails = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post(`${BASE_URL}/SelectEventDetails`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_EVENT_DETAILS_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_EVENT_DETAILS_FAIL,
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

export const AddAndUpdateLiveEvent = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post(`${BASE_URL}/AddAndUpdateLiveEvent`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: EVENT_LIVE_ADD_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: EVENT_LIVE_ADD_FAIL,
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

export const SelectEventCategory = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post(`${BASE_URL}/SelectEventCategory`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_EVENT_CATEGORY_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_EVENT_CATEGORY_FAIL,
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

export const onSendNotification = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/onSendNotification`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: ON_SEND_NOTIFICATION_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: ON_SEND_NOTIFICATION_FAIL,
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

export const ChangeOrderStatus = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/ChangeOrderStatus`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: CHNAGE_ORDER_STATUS_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: CHNAGE_ORDER_STATUS_FAIL,
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

export const GetCustomerPujaListFromPandit = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/GetCustomerPujaListFromPandit`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: GET_CUSTOMER_LIST_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: GET_CUSTOMER_LIST_FAIL,
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

export const GetAgoraToken = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/GetAgoraToken`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: GET_AGORA_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: GET_AGORA_FAIL,
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

export const UpdateCountryCode = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/UpdateCountryCode`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: UPDATE_COUNTRY_CODE_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: UPDATE_COUNTRY_CODE_FAIL,
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


export const GetUserProfile = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.post( `${BASE_URL}/GetUserProfile`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: GET_CURRENT_COUNRTY_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: GET_CURRENT_COUNRTY_FAIL,
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


export const GetCurrencyDetails = () => {
    var result = [];
    return async dispatch => {
    await  axios.get( `${BASE_URL}/GetCurrencyDetails`)
        .then(function (response) {
        result = response.data
            if(result.status == 200){
                dispatch({
                    type: GET_CURRENCY,
                    payload: response.data
                });
            }
        })
        .catch(function (error) {
        console.log(error);
        });

        return result;
    }
}
