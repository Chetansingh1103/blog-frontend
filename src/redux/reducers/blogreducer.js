import { 
    CREATEBLOG_REQUEST,
    CREATEBLOG_SUCCESS,
    CREATEBLOG_FAILURE,
    UPDATEBLOG_REQUEST,
    UPDATEBLOG_SUCCESS,
    UPDATEBLOG_FAILURE,
    DELETEBLOG_REQUEST,
    DELETEBLOG_SUCCESS,
    DELETEBLOG_FAILURE,
    DISPLAYALLBLOG_REQUEST,
    DISPLAYALLBLOG_SUCCESS,
    DISPLAYALLBLOG_FAILURE,
    DISPLAY_ALL_BLOGS_BY_USER_REQUEST,
    DISPLAY_ALL_BLOGS_BY_USER_SUCCESS,
    DISPLAY_ALL_BLOGS_BY_USER_FAILURE,
    DISPLAY_HOMEPAGE_BLOGS_REQUEST,
    DISPLAY_HOMEPAGE_BLOGS_SUCCESS,
    DISPLAY_HOMEPAGE_BLOGS_FAILURE, 
} from '../actions/actionTypes';

const initialState = {
    blogs: [],
    loading: false,
    error: null,
    success: null,
    createBlog: false,
    updateBlog: false,
    deleteBlog: false,
    displayAllBlogs: false,
    displayAllBlogsByUser: false,
    displayHomepageBlogs: false,
};

const blogReducer = (state=initialState,action) => {
    switch(action.type){
        case CREATEBLOG_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                createBlog: true,
            }
        case CREATEBLOG_SUCCESS:
            return {
             ...state,
                loading: false,
                error: null,
                success: action.payload.success,
            }
        case CREATEBLOG_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error,
            }
        case UPDATEBLOG_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                updateBlog: true,
            }
        case UPDATEBLOG_SUCCESS:
            return {
             ...state,
                loading: false,
                error: null,
                success: action.payload.success,
            }
        case UPDATEBLOG_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error,
            }
        case DELETEBLOG_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                deleteBlog: true,
            }
        case DELETEBLOG_SUCCESS:
            return {
             ...state,
                loading: false,
                error: null,
                success: action.payload.success,
            }
        case DELETEBLOG_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error,
            }
        case DISPLAYALLBLOG_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                displayAllBlogs: true,
            }
        case DISPLAYALLBLOG_SUCCESS:
            return {
             ...state,
                loading: false,
                blogs: action.payload.blogs,
                error: null,
                success: action.payload.success,
            }
        case DISPLAYALLBLOG_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error,
            }
            
        case DISPLAY_ALL_BLOGS_BY_USER_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                displayAllBlogsByUser: true,
            }
        case DISPLAY_ALL_BLOGS_BY_USER_SUCCESS:
            return {
             ...state,
                loading: false,
                blogs: action.payload.blogs,
                error: null,
                success: action.payload.success,
            }
        case DISPLAY_ALL_BLOGS_BY_USER_FAILURE:
            return {
             ...state,
                loading: false,
                error: action.payload.error,
            }
        case DISPLAY_HOMEPAGE_BLOGS_REQUEST:
            return {
             ...state,
                loading: true,
                error: null,
                displayHomepageBlogs: true,
            }
        case DISPLAY_HOMEPAGE_BLOGS_SUCCESS:
            return {
             ...state,
                loading: false,
                blogs: action.payload.blogs,
                error: null,
                success: action.payload.success,
            }
        case DISPLAY_HOMEPAGE_BLOGS_FAILURE:
            return {     
             ...state,
                loading: false,
                error: action.payload.error,
            }

        default:
            return state; 
    }
}

export default blogReducer;