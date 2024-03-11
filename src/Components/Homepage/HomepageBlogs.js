import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card } from 'react-bootstrap';

const HomePageBlogs = ({blogData}) => {

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

    return (
        <div>
           <Card style={{ margin: "2rem" }}>
            <Card.Body>
                <div style={{ display: "flex", justifyContent: "space-between"}}>
                <Card.Title style={{fontSize: "20px"}}>{blogData.title}</Card.Title>
                <Card.Text style={{color: "grey"}}>{formattedDateTime}</Card.Text>
                </div>
                <Card.Text>{blogData.textBody}</Card.Text>
                <Card.Title style={{fontSize: "16px", color: "grey"}}>Created By - {blogData.username}</Card.Title>
            </Card.Body>
        </Card>
        </div>
    )
}

export default HomePageBlogs;