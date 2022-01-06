import React from 'react';
import { Card } from 'react-bootstrap';
import testimonialImg from '../../../images/login/user.png';
import ReactStars from "react-rating-stars-component";


const TestiMonialsDetails = ({ review }) => {
    const { userName, rating, address, description } = review;


    return (
        <div className='mt-5'>
            <Card>
                <Card.Img variant="top" src={testimonialImg} style={{ borderRadius: '50%', width: '25%', marginTop: '10px' }} className='mx-auto' />
                <Card.Body>
                    <Card.Title className='fw-bold text-warning'>{userName}</Card.Title>
                    <p className='fw-bold text-secondary text-capitalize'>{address}</p>
                    <div className='d-inline'>
                        <div class="d-inline p-2 text-primary">
                            <span className='fw-bold'>Rating: {rating}</span>
                            <div className='mx-auto'>
                                <ReactStars
                                    isHalf={true}
                                    edit={false}
                                    size={24}
                                    color="#666"
                                    count={Number(rating)}
                                    value={Number(rating)}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                        <div class="d-inline p-2 text-primary">
                        </div>
                    </div>
                    <Card.Text className='text-center fw-normal'>
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