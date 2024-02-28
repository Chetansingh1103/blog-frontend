import React, { useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from "../redux/actions/authActions";

const Register = () => {

    const [username, setUserName] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch()
    const authState = useSelector(state => state.auth)
    
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

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
        setSuccess("You have successfully registered")
        setTimeout(() => {
          setSuccess("")
        },2000)
        
      }

    },[authState]);

    function implementRegister(e){

      e.preventDefault();

      const user = {
        username: username,
        name: name,
        email: email,
        password: password
      }

      dispatch(registerUser(user));


    }
    

    return (
        <div style = {{padding: "20px", margin: "20px", marginTop: "70px"}}>
        <h1>Register</h1>
        <Form onSubmit={implementRegister}>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" onChange={(e) => setUserName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>

    <div>
      <span>Already Registered?</span>
      <span><a href="/login">Login </a></span>
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

export default Register;