
export const SELECT_STATE_SUCCESS = "SELECT_STATE_SUCCESS";
export const SELECT_STATE_FAIL = "SELECT_STATE_FAIL";
export const SELECT_CATEGORIES_SUCCESS = "SELECT_CATEGORIES_SUCCESS";
export const SELECT_CATEGORIES_FAIL = "SELECT_CATEGORIES_FAIL";
export const SELECT_CITY_SUCCESS = "SELECT_CITY_SUCCESS";
export const SELECT_CITY_FAIL = "SELECT_CITY_FAIL";
export const GET_SLOT_SUCCESS = "GET_SLOT_SUCCESS";
export const GET_SLOT_FAIL = "GET_SLOT_FAIL";
export const SELECT_SLOT_SUCCESS = "SELECT_SLOT_SUCCESS";
export const SELECT_SLOT_FAIL = "SELECT_SLOT_FAIL";
export const CHECK_PROFILE_SUCCESS = "CHECK_PROFILE_SUCCESS";
export const CHECK_PROFILE_FAIL = "CHECK_PROFILE_FAIL";
import axios from "axios";

const BASE_URL = 'https://backend.docxamine.com/api';
// const BASE_URL = 'http://192.168.43.190:3002/api/users';

//https://backend.docxamine.com/api/getSlotsDoctor
export const completionChecks = (token) => {

    return async dispatch => {
        // logic to make a post to REGISTER the user
    await   axios.get(`${BASE_URL}/completionChecks`,{
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': token
        },
        })
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        console.log("resultsss", result, token);
        if(result.status == 200){
            dispatch({
                type: CHECK_PROFILE_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: CHECK_PROFILE_FAIL,
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


export const getSlotsDoctor = (authData, token) => {

    return async dispatch => {
        // logic to make a post to REGISTER the user
    await   axios.get(`${BASE_URL}/getSlotsDoctor?date=${authData}`,{
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': token
        },
        })
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_SLOT_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_SLOT_FAIL,
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



export const slotGenerator = (authData, token) => {
    console.log(authData)
    var result = [];
    var data = JSON.stringify(
        authData
      );
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await   axios.post(`${BASE_URL}/slotGenerator`,data,{
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': token
        },
        })
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: GET_SLOT_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: GET_SLOT_FAIL,
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


export const getcities = (state) => {
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.get(`${BASE_URL}/getcities?state_id=${state}`)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_CITY_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_CITY_FAIL,
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

export const getDoctorCategories = () => {
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.get(`${BASE_URL}/getDoctorCategories`)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_CATEGORIES_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_CATEGORIES_FAIL,
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


export const getStates = (authData) => {
    console.log(authData)
    var result = [];
    return async dispatch => {
        // logic to make a post to REGISTER the user
    await  axios.get(`${BASE_URL}/getStates`, authData)
        .then(function (response) {
        // console.log(response.data);
        result = response.data
        if(result.status == 200){
            dispatch({
                type: SELECT_STATE_SUCCESS,
                payload: response.data
            });
        }else{
            dispatch({
                type: SELECT_STATE_FAIL,
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
