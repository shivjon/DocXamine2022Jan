import {
    GET_CURRENCY,
    GET_CURRENT_COUNRTY_SUCCESS,
    GET_CURRENT_COUNRTY_FAIL,
    UPDATE_COUNTRY_CODE_FAIL,
    UPDATE_COUNTRY_CODE_SUCCESS,
    GET_AGORA_SUCCESS,
    GET_AGORA_FAIL,
    GET_CUSTOMER_LIST_SUCCESS,
    GET_CUSTOMER_LIST_FAIL,
    CHNAGE_ORDER_STATUS_SUCCESS,
    CHNAGE_ORDER_STATUS_FAIL,
    ON_SEND_NOTIFICATION_SUCCESS,
    ON_SEND_NOTIFICATION_FAIL,
    SELECT_EVENT_CATEGORY_SUCCESS,
    SELECT_EVENT_CATEGORY_FAIL,
    EVENT_LIVE_ADD_FAIL,
    EVENT_LIVE_ADD_SUCCESS,
    SELECT_EVENT_DETAILS_FAIL,
    SELECT_EVENT_DETAILS_SUCCESS,
} from '../actions/mainAction';

const initialState = {
    user: {},
    error:{},
    data:'',
    currency:{}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case SELECT_EVENT_DETAILS_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_EVENT_DETAILS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case EVENT_LIVE_ADD_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case EVENT_LIVE_ADD_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case SELECT_EVENT_CATEGORY_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case SELECT_EVENT_CATEGORY_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case ON_SEND_NOTIFICATION_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case ON_SEND_NOTIFICATION_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case CHNAGE_ORDER_STATUS_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case CHNAGE_ORDER_STATUS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_CUSTOMER_LIST_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_CUSTOMER_LIST_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case GET_AGORA_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_AGORA_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case UPDATE_COUNTRY_CODE_SUCCESS:
            return{
                ...state,
                data: action.payload
            }
        case UPDATE_COUNTRY_CODE_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_CURRENT_COUNRTY_SUCCESS:
            return{
                ...state,
                user: action.payload
            }
        case GET_CURRENT_COUNRTY_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case GET_CURRENCY:
            return{
                ...state,
                currency: action.payload
            }
    }

    return state;
}