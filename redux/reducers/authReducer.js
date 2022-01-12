import {
  // LOGIN_USER_SUCCESS,
  // LOGIN_USER_FAIL,

  // FCM_TOKEN_SUCCESS,
  // CHECK_MOBILE_SUCCESS,
  // CHECK_MOBILE_FAIL,
  // CHECK_EMAIL_OTP_SUCCESS,
  // CHECK_EMAIL_OTP_FAIL,
  // LOGIN_MOBILE_PASSWORD_SUCCESS,
  // LOGIN_MOBILE_PASSWORD_FAIL,
  // FORGET_MOBILE_SUCCESS,
  // FORGET_MOBILE_FAIL,
  // FORGET_MOBILE_UPDATE_SUCCESS,
  // FORGET_MOBILE_UPDATE_FAIL,
  // FORGET_EMAIL_UPDATE_SUCCESS,
  // FORGET_EMAIL_UPDATE_FAIL,
  // U_EMAIL_UPDATE_SUCCESS,
  // U_EMAIL_UPDATE_FAIL,
  LOGIN_USER_AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  OFFLINE_STATUS,
} from '../actions/authAction';

const initialState = {
  user: {},
  error: {},
  fcmToken: '',
  data: '',
  token: '',
  status: true,
  currency: '',
  countryData: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER_AUTH_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case OFFLINE_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
  }

  return state;
}
