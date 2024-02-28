import React, { useEffect, useState } from "react";
import { useSelector, useDispatch} from 'react-redux';
import { Outlet } from "react-router-dom";
import HomePageBlogs from "../Components/Homepage/HomepageBlogs";
import { displayHomepageBlogs } from '../redux/actions/blogActions';

const Homepage = () => {

    
    const authState = useSelector(state => state.auth)
    const blogState = useSelector(state => state.blog)
    const dispatch = useDispatch()
    const token = authState.token;

    console.log(blogState.blogs);

    console.log(authState.token)

    useEffect(() => {

        dispatch(displayHomepageBlogs(token));

   }, []);


    return (
        <div>
            <Outlet/>
            <div className="spinner-container">
            {(blogState.loading && blogState.displayHomepageBlogs)?(<div className="spinner"></div>):(<div>
                {blogState.blogs && blogState.blogs.map((blog) => (
                    <HomePageBlogs key={blog._id} blogData={blog}/>
                ))}
            </div>)}
            </div>
        </div>
    )
}

export default Homepage;