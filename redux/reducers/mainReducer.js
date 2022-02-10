import {
    SELECT_STATE_SUCCESS,
    SELECT_STATE_FAIL,
    SELECT_CATEGORIES_SUCCESS,
    SELECT_CATEGORIES_FAIL,
    SELECT_CITY_SUCCESS,
    SELECT_CITY_FAIL,
    GET_SLOT_FAIL,
    GET_SLOT_SUCCESS,
    SELECT_SLOT_SUCCESS,
    SELECT_SLOT_FAIL,
} from '../actions/mainAction';

const initialState = {
    user: {},
    error:{},
    data:'',
    currency:{}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SELECT_SLOT_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_SLOT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_SLOT_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case GET_SLOT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case SELECT_CITY_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_CITY_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case SELECT_CATEGORIES_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_CATEGORIES_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case SELECT_STATE_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_STATE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        
    }

    return state;
}