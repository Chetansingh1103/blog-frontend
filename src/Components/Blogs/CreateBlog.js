import React, {  useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from "../../redux/actions/blogActions";


const CreateBlog = () => {

    const [title, setTitle] = useState();
    const [textBody, setTextBody] = useState();

    const dispatch = useDispatch()
    const blogState = useSelector(state => state.blog)
    const authState = useSelector(state => state.auth)
    const token = authState.token; // here we have taken token from redux state and redux state has taken it from local storage , so no need to take it directly from local storage

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {

      if(blogState.success){
        setSuccess(blogState.success)
        setError("")

        setTimeout(() => {
          setSuccess("")
        }, 2000)
      }

      if(blogState.error){
        setSuccess("")
        setError(blogState.error)

        setTimeout(() => {
          setError("")
        }, 3000)
      }

       if(blogState.loading){
        setSuccess("")
        setError("")
       }
    },[blogState])
         

    function implementCreateBlog(e){

       e.preventDefault();

       const blogData = {
        title,
        textBody
       }

      

       dispatch(createBlog(blogData, token))

    }
    return (
        <div style = {{padding: "20px", margin: "20px", marginTop:"70px"}} >
        <h1>Create Blog</h1>
            <Form onSubmit={implementCreateBlog}>
                <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Title" 
                    onChange={(e) => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="textbody">
                <Form.Label>TextBody</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5} 
                    placeholder="Enter Text Body" 
                    onChange={(e) => setTextBody(e.target.value)}/>
                </Form.Group>
                <Button type="submit">Create</Button>
            </Form>
            <div className="spinner-container">
            <div>
              {blogState.loading && blogState.createBlog && <div className='loading spinner'></div>}
            </div>
            </div>
        </div>
    )
}

export default CreateBlog;