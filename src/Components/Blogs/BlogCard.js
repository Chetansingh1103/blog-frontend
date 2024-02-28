import React, { useState } from "react";
import { Button, Card, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { deleteBlog, updateBlog } from "../../redux/actions/blogActions";

const BlogCard = ({blogData}) => {

    const dateTimeString = blogData.creationDateTime;

    const dateTime = new Date(dateTimeString);

    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
        hour12: true 
    };

    const formattedDateTime = dateTime.toLocaleString('en-US', options);

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    
    const [isEdit, setIsEdit] = useState(false)
    const [newTitle, setNewTitle] = useState(blogData.title);
    const [newTextBody, setNewTextBody] = useState(blogData.textBody);

    const blogId = blogData._id; // blog's unique id


    function handleDeleteBlog(){

        dispatch(deleteBlog(blogId,token))

    }

    function implementUpdateBlog(e){

        e.preventDefault();
 
        const blogData = {
         blogId,   
         newTitle,
         newTextBody
        }
 
        dispatch(updateBlog(blogData, token))
 
     }


    return (
        <div style={{padding: "20px", display: "flex"}}>
         <Card style={{width: "80vw"}}>
            <Card.Body style={{padding: "20px", width: "80vw"}}>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                <Card.Title>{blogData.title}</Card.Title>
                <Card.Text>{formattedDateTime}</Card.Text>
                </div>
                <Card.Text>{blogData.textBody}</Card.Text>
                <Button  variant="primary" style={{ marginRight: "10px", marginBottom: "20px"}}
                    onClick={() => setIsEdit(!isEdit)}
                    
                >
                    Edit
                </Button>
                <Button variant="danger" style={{ marginRight: "10px", marginBottom: "20px"}}
                    onClick={handleDeleteBlog}
                >
                    Delete
                </Button>
                {isEdit && 
                    <Form onSubmit={implementUpdateBlog}>
                <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    value={newTitle} 
                    onChange={(e) => setNewTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="textbody">
                <Form.Label>TextBody</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={5} 
                    value={newTextBody}
                    onChange={(e) => setNewTextBody(e.target.value)}/>
                </Form.Group>
                <Button type="submit" style={{ marginRight: "10px", marginBottom: "10px"}}>Update</Button>
                <Button onClick={() => setIsEdit(!isEdit)}>Close Without Save</Button>
            </Form>
                }
            </Card.Body>
        </Card>
        
        </div>
    )
}

export default BlogCard;