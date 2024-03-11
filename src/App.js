import React, { useEffect, useState }from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import CreateBlog from './Components/Blogs/CreateBlog';
import MyBlogs from './pages/MyBlogs';
import Header from "./Components/common/Header";
import Users from './pages/Users';


const App = () => {

    const authState = useSelector(state => state.auth)
    
    return (
        <div className='app'>
        {authState.token && <Header />}
            <Routes>
                <Route path='/' element={authState.token? <Navigate to='/homepage'/>: <Register/>} />
                <Route path='/login' element={authState.token? <Navigate to='/homepage'/>:<Login />} />
                <Route path='/homepage' element={authState.token? <Homepage/>:<Navigate to='/login'/>}>
                    <Route path='' element={<CreateBlog/>}/>
                </Route>
                <Route path='/my-blogs' element={authState.token? <MyBlogs/>:<Navigate to='/login'/>}/>
                <Route path='/users' element={authState.token? <Users/>:<Navigate to='/login'/>}/>
            </Routes>
        </div>
    )
}

export default App;