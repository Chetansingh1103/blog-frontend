import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayAllBlogsByUser } from '../redux/actions/blogActions';
import BlogCard from '../Components/Blogs/BlogCard';

const MyBlogs = () => {

    const blogState = useSelector(state => state.blog)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    

    useEffect(() => {

        dispatch(displayAllBlogsByUser(token));

    }, []);

    

    return (
        <div>
        <h1>My Blogs</h1>
            {blogState.blogs && blogState.blogs.map((blog) => (
                <BlogCard key={blog._id} blogData={blog} />
            ))}
        </div>
    )
}

export default MyBlogs;