import React from 'react';
import { Card, Col } from 'react-bootstrap';
import testimonialImg from '../../../images/login/user.png';
import ReactStars from "react-rating-stars-component";
import './TestiMonialsDetails.css'


const TestiMonialsDetails = ({ review }) => {
    const { userName, rating, address, description } = review;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={testimonialImg} className='w-25 mx-auto mt-2'
                />
                <Card.Body>
                    <Card.Title className='text-primary'>{userName}</Card.Title>
                    <Card.Text className='text-center fw-bold text-info'>
                        {address}
                    </Card.Text>
                    <div className='testimonial-div'>
                        <p className='text-center'>
                            <ReactStars
                                classNames='user-icon'
                                size={24}
                                isHalf={true}
                                edit={false}
                                count={Number(rating)}
                                value={Number(rating)}
                                activeColor="#ffd700"
                            />
                        </p>
                    </div>
                    <Card.Text className='text-center'>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TestiMonialsDetails;