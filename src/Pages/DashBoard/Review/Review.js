import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';

import './Review.css';

const Review = () => {
    const {user} = useAuth();
    const [reviewCount, setReviewCount] = useState(0);
    const ratingChanged = (newRating) => {
        setReviewCount(newRating);
        console.log(newRating);
    };

    return (
        <div className='review-main'>
            <div className='review-div'>
                <h2 className='fw-bold mb-4 mt-4 mb-0'>Give A Feedback</h2>
                <form action="">
                    <Row xs={1} md={1} lg={2} className="g-4 text-start">
                        <Col className='mt-5'>
                            <span className='fs-6 fw-bold'>Your Name</span>
                            <input className='form-control w-100' value={user.displayName} type="text" />
                        </Col>
                        <Col>
                            <span className='mb-0 fs-6 fw-bold'>Your Raging: {reviewCount}</span>
                            <p>                              
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={40}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700" />                
                            </p>                               
                        </Col>
                    </Row>
                    <span className='fw-bold fs-6 mt-2'>Your Address</span>
                    <input type="text" placeholder='your address' className='form-control w-100' />

                    <span className='fw-bold fs-6 mt-2'>Description</span>
                    <textarea type="text" placeholder='your address' className='form-control w-100' />
                </form>
            </div>

        </div>
    );
};

export default Review;