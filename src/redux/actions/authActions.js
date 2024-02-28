// actions.js

import axios from 'axios';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  
} from './actionTypes';

const API_URL = 'http://localhost:3001/user';

// Action Creators
export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (success) => ({
  type: REGISTER_SUCCESS,
  payload: success,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token,success) => ({
  type: LOGIN_SUCCESS,
  payload: {token, success},
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async Actions with Thunk
export const registerUser = (userData) => {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const response = await axios.post(`${API_URL}/register`, userData);
      
      // if status is ok then proceed
      if(response.data.status === 200){
        dispatch(registerSuccess(response.data));
        console.log(response.data);
        setTimeout(() => {
          window.location.href = "/login";
        },1500)
      }

    } catch (error) {
      dispatch(registerFailure(error.response.data.message));
     // console.log(error.response.data.message);
    }
  };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_URL}/login`, userData);

      // if status is ok then proceed
      if(response.data.status === 200){

        setTimeout(() => {
          dispatch(loginSuccess(response.data.data.token, response.data.message));
          localStorage.setItem('token', response.data.data.token)

        },1000)
       
      }
      
    } catch (error) {
      dispatch(loginFailure(error.response.data.message));
      console.log(error)
    }
  };
};
