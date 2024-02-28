// reducers.js

import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/actionTypes';
  
  const initialState = {
    token: localStorage.getItem('token') || null,
    loading: false,
    error: null,
    success: null,
    login: false,
    register: false
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          register: true
        };
      case LOGIN_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          login: true
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          success: action.payload,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload.token,
          loading: false,
          error: null,
          success: action.payload.success,
        };
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
        return {
          ...state,
          token: null,
          loading: false,
          error: action.payload,
          success: null
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  