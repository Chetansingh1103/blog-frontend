import axios from 'axios';

import { 
    GET_ALL_USERS_FAILURE,
    GET_ALL_USERS_REQUEST,
    GET_ALL_USERS_SUCCESS,
    FOLLOW_REQUEST,
    FOLLOW_SUCCESS,
    FOLLOW_FAILURE,
    UNFOLLOW_REQUEST,
    UNFOLLOW_SUCCESS,
    UNFOLLOW_FAILURE,
} from './actionTypes';



const API_URL_MAIN = process.env.REACT_APP_BACKEND_URL;


export const getAllUserRequest = () => {
    return {
        type: GET_ALL_USERS_REQUEST
    }
}

export const getAllUserSuccess = (users,success) => {
    return {
        type: GET_ALL_USERS_SUCCESS,
        payload: {users, success}
    }
}

export const getAllUserFailure = (error) => {
    return {
        type: GET_ALL_USERS_FAILURE,
        payload: {error}
    }
}

export const followRequest = () => {
    return {
        type: FOLLOW_REQUEST,
    }
}

export const followSuccess = (success) => {
    return {
        type: FOLLOW_SUCCESS,
        payload: {success}
    }
}

export const followFailure = (error) => {
    return {
        type: FOLLOW_FAILURE,
        payload: {error}
    }
}

export const unfollowRequest = () => {
    return {
        type: UNFOLLOW_REQUEST,
    }
}

export const unfollowSuccess = (success) => {
    return {
        type: UNFOLLOW_SUCCESS,
        payload: {success}
    }
}

export const unfollowFailure = (error) => {
    return {
        type: UNFOLLOW_FAILURE,
        payload: {error}
    }
}





//------------------------------------------------------------------

export const getAllUsers = (token) => {
    return async (dispatch) => {
        dispatch(getAllUserRequest());

        try{
            const response = await axios.get(`${API_URL_MAIN}/user/get-all-users`, {
                headers: {
                    "x-acciojob": token
                }
            })

            console.log(response.data, token)

            if(response.data.status === 200){
                dispatch(getAllUserSuccess(response.data.data, response.data.message));
            }

        }
        catch(error){
            dispatch(getAllUserFailure(error.response.data.message));
            console.log(error.response.data.message);
        }

    }
}

export const follow = (id, token) => {
    return async (dispatch) => {
        dispatch(followRequest());
        try{

            const response = await axios.post(`${API_URL_MAIN}/follow/follow-user`, {
                followingUserId: id,
            }, {
                headers: {
                    "x-acciojob": token
                }
            })

            if(response.data.status === 200) {
                dispatch(followSuccess(response.data.message));
            }

        }
        catch(error){
            dispatch(followFailure(error.response.data.message));
        }
        
    }
}

export const unfollow = (id, token) => {
    return async (dispatch) => {
        dispatch(unfollowRequest());
        try{
            const response = await axios.post(`${API_URL_MAIN}/follow/unfollow-user`, {
                unfollowingUserId: id,
            }, {
                headers: {
                    "x-acciojob": token
                }
            })

            if(response.data.status === 200) {
                dispatch(unfollowSuccess(response.data.message));
            }
        }
        catch(error){
            dispatch(unfollowFailure(error.response.data.message));
        }
    }
}