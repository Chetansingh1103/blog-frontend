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
} from '../actions/actionTypes';


const initialState = {
    users: [],
    loading: false,
    error: null,
    success: null,
    getAllusers: null,
    follow: null,
    unfollow: null
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_USERS_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                getAllusers: true
            }
        case GET_ALL_USERS_SUCCESS:
            return {
             ...state,
                loading: false,
                users: action.payload.users,
                error: null,
                success: action.payload.success,
            }
        case GET_ALL_USERS_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error
            }
            
        case FOLLOW_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                follow: true
            }
        case FOLLOW_SUCCESS:
            return {
             ...state,
                loading: false,
                error: null,
                success: action.payload.success,
            }
        case FOLLOW_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error
            }
            
        case UNFOLLOW_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                unfollow: true
            }
            
        case UNFOLLOW_SUCCESS:
            return {
             ...state,
                loading: false,
                error: null,
                success: action.payload.success,
            }
            
        case UNFOLLOW_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error
            }
       
        default: 
            return state;
    }

}

export default userReducer;

