import React from 'react';
import { Card } from 'react-bootstrap';
import testimonialImg from '../../../images/login/user.png';
import ReactStars from "react-rating-stars-component";

const TestiMonialsDetails = ({review}) => {
    const {userName,rating,address,description} = review;
    return (
        <div className='mt-5'>
            <Card>
                <Card.Img variant="top" src={testimonialImg} style={{borderRadius:'50%',width:'25%',marginTop:'10px'}} className='mx-auto' />
                <Card.Body>
                    <Card.Title>{userName}</Card.Title>
                    <p>{address}</p>
                    <Card.Text className='text-center '>
                        {description}
                    </Card.Text>
                </Card.Body>
                <p>
                </p>
            </Card>
        </div>
    );
};

export default TestiMonialsDetails;