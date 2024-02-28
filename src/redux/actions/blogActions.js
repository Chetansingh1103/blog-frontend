import axios from 'axios';

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

} from './actionTypes';

const API_URL = 'http://localhost:3001/blog';

export const createBlogRequest = () => {
    return {
        type: CREATEBLOG_REQUEST
    }
}

export const createBlogSuccess = (success) => {
    return {
        type: CREATEBLOG_SUCCESS,
        payload: {success}
    }
}

export const createBlogFailure = (error) => {
    return {
        type: CREATEBLOG_FAILURE,
        payload: {error}
    }
}

export const updateBlogRequest = () => {
    return {
        type: UPDATEBLOG_REQUEST
    }
}

export const updateBlogSuccess = (success) => {
    return {
        type: UPDATEBLOG_SUCCESS,
        payload: {success}
    }
}

export const updateBlogFailure = (error) => {
    return {
        type: UPDATEBLOG_FAILURE,
        payload: {error}
    }
}

export const deleteBlogRequest = () => {
    return {
        type: DELETEBLOG_REQUEST
    }
}

export const deleteBlogSuccess = (success) => {
    return {
        type: DELETEBLOG_SUCCESS,
        payload: {success}
    }
}

export const deleteBlogFailure = (error) => {
    return {
        type: DELETEBLOG_FAILURE,
        payload: {error}
    }
}

export const displayAllBlogRequest = () => {
    return {
        type: DISPLAYALLBLOG_REQUEST
    }
}

export const displayAllBlogSuccess = (blogs,success) => {
    return {
        type: DISPLAYALLBLOG_SUCCESS,
        payload: {blogs,success}
    }
}

export const displayAllBlogFailure = (error) => {
    return {
        type: DISPLAYALLBLOG_FAILURE,
        payload: {error}
    }
}

export const displayAllBlogsByUserRequest = () => {
    return {
        type: DISPLAY_ALL_BLOGS_BY_USER_REQUEST
    }
}

export const displayAllBlogsByUserSuccess = (blogs,success) => {
    return {
        type: DISPLAY_ALL_BLOGS_BY_USER_SUCCESS,
        payload: {blogs,success}
    }
}

export const displayAllBlogsByUserFailure = (error) => {
    return {
        type: DISPLAY_ALL_BLOGS_BY_USER_FAILURE,
        payload: {error}
    }
}

export const displayHomepageBlogsRequest = () => {
    return {
        type: DISPLAY_HOMEPAGE_BLOGS_REQUEST
    }
}

export const displayHomepageBlogsSuccess = (blogs,success) => {
    return {
        type: DISPLAY_HOMEPAGE_BLOGS_SUCCESS,
        payload: {blogs,success}
    }
}

export const displayHomepageBlogsFailure = (error) => {
    return {
        type: DISPLAY_HOMEPAGE_BLOGS_FAILURE,
        payload: {error}
    }
}

//-----------------------------------------------------------------------

export const createBlog = (blogData, token) => {
    return async (dispatch) => {
        dispatch(createBlogRequest());
        try {
            
            const response = await axios.post(`${API_URL}/create`, blogData, {
                headers: {
                    "x-acciojob": token
                }
            });

            // if status is ok then proceed
            if(response.data.status === 201) {
                dispatch(createBlogSuccess(response.data.message));
                alert(response.data.message);
                setTimeout(() => {
                    window.location.href = "/my-blogs";
                },1000)
            }
            
        } catch (error) {
            dispatch(createBlogFailure(error.response.data.message));
            alert(error.response.data.message)
        }
    }
}

export const updateBlog = (blogData, token) => {
    return async (dispatch) => {
        dispatch(updateBlogRequest());
        try {
            console.log("first")
            console.log(blogData, token);
            const response = await axios.put(`${API_URL}/edit-blog`, {
                blogId: blogData.blogId,
                title: blogData.newTitle,
                textBody: blogData.newTextBody
            }, {
                headers: {
                    "x-acciojob": token
                }
            });


            if(response.data.status === 200){
                dispatch(updateBlogSuccess(response.data.message));
                alert(response.data.message);
                setTimeout(() => {
                    window.location.reload();
                },1000)
            }
           
        } catch (error) {
            dispatch(updateBlogFailure(error.response.data.message));
            alert(error.response.data.message)
            setTimeout(() => {
                window.location.reload();
            },1000)
        }
    }
}

export const deleteBlog = (id, token) => {
    return async (dispatch) => {
        dispatch(deleteBlogRequest());
        try {
            const response = await axios.delete(`${API_URL}/delete-blog/${id}`, {
                headers: {
                    "x-acciojob": token
                }
            });

            if(response.data.status === 200){
                dispatch(deleteBlogSuccess(response.data.message));
                alert(response.data.message);
                setTimeout(() => {
                    window.location.reload();
                },1000)
            }
            
        } catch (error) {
            dispatch(deleteBlogFailure(error.response.data.message));
            alert(error.response.data.message);
        }
    }
}

export const displayAllBlog = () => {
    return async (dispatch) => {
        dispatch(displayAllBlogRequest());
        try {
            const response = await axios.get(`${API_URL}/blog`);
            dispatch(displayAllBlogSuccess(response.data));
        } catch (error) {
            dispatch(displayAllBlogFailure(error.response.data));
        }
    }
}

export const displayAllBlogsByUser = (token) => {
    return async (dispatch) => {
        dispatch(displayAllBlogsByUserRequest());
        try {
            const response = await axios.get(`${API_URL}/get-user-blogs`, {
                headers: {
                    "x-acciojob": token
                }
            });

            if(response.data.status === 200){
                console.log(response.data.data)
                dispatch(displayAllBlogsByUserSuccess(response.data.data));

            }
            
        } catch (error) {
            dispatch(displayAllBlogsByUserFailure(error.response.data));
        }
    }
}

export const displayHomepageBlogs = (token) => {
    return async (dispatch) => {
        dispatch(displayHomepageBlogsRequest());
        try {
            const response = await axios.get(`${API_URL}/get-homepage-blogs`, {
                headers: {
                    "x-acciojob": token
                }
            });

            if(response.data.status === 200){
                dispatch(displayHomepageBlogsSuccess(response.data.data, response.data.message));
            }
            
        } catch (error) {
            dispatch(displayHomepageBlogsFailure(error.response.data.message));
        }
    }
}

