import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from 'react-redux';
import { follow, unfollow } from '../../redux/actions/userActions';

const UserCard = ({userData}) => {

    
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const [ followUser, setFollowUser] = useState(userData.follow);


    useEffect(() => {
        setFollowUser(userData.follow)
    },[userData.follow])


    function handleFollow(){

        dispatch(follow(userData._id,token))
        setFollowUser(true)

    }

    function handleUnfollow(){

        dispatch(unfollow(userData._id,token))
        setFollowUser(false)

    }

    

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{userData.name}</Card.Title>
                <Card.Text>{userData.username}</Card.Text>
                <Card.Text>{userData.email}</Card.Text>
                {
                followUser ? 
                    (
                        <Button variant="danger" onClick={handleUnfollow}>Unfollow</Button>
                    ) 
                    : 
                    (
                        <Button variant="primary" onClick={handleFollow}>Follow</Button>
                    )
                }
                
            </Card.Body>
            </Card>
        </div>
    )
}

export default UserCard;