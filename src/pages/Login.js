import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "../redux/actions/authActions";

const Login = () => {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    
    const [error, setError] = useState(authState.error);
    const [loading, setLoading] = useState(authState.loading);
    const [success, setSuccess] = useState(authState.success);

    useEffect(() => {

      setSuccess(authState.success)
      setError(authState.error)
      setLoading(authState.loading)

      if(authState.error){
        setTimeout(() => {
          setError("")
        },4000)
      }
      
      
      
      if(authState.success){
        setSuccess(authState.success)
        setTimeout(() => {
          setSuccess("")
        },2000)
        
      }

    },[authState]);

    function implementLogin(e){

      e.preventDefault();

      const user = {
        username: username,
        password: password
      }

      dispatch(loginUser(user));


    }
    return (
        <div style = {{padding: "20px", margin: "20px", marginTop: "70px"}}>
        <h1>Login</h1>
            <Form onSubmit={implementLogin}>
                <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
            <div>
                <span>Did not Register?</span>
                <span><a href="/">Register here</a></span>
            </div>
            <div className="spinner-container">
                {
                  error && <h4 className='error'>{error}</h4>
                }
                {
                  success && <h4 className='success'>{success}</h4>
                }
                {
                  loading && <div className='loading spinner'></div>
                }
            </div>
        </div>
    )
}

export default Login;