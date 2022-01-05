import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";


import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const [reviewCount, setReviewCount] = useState([]);
    // const star = 0;
    const { register, handleSubmit } = useForm();
    // const [review,setReview] = useState({});
    const ratingChanged = (newRating) => {
        // star = newRating;
        setReviewCount(newRating);
    };

    // const handleReviewCount = e => {
    //     console.log('review changes',e.target.value);
    //     setReviewCount(e.target.value);
    // }
    // console.log('rating = ',star);
    const onSubmit = data => {
        console.log('user review',data);
        fetch('http://localhost:5000/user/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('thanks! for your review');
            }
        })
    };

    return (
        <div className='review-main'>
            <div className='review-div'>
                <h2 className='fw-bold mb-4 mt-4 mb-0'>Give A Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row xs={1} md={1} lg={2} className="g-4 text-start">
                        <Col className='mt-5'>
                            <span className='fs-6 fw-bold mb-1' >Your Name</span>
                            {/* <input className='form-control w-100' name='userName' onBlur={handleOnBlur} value={user.displayName} type="text" /> */}
                            <input {...register("userName")} value={user.displayName || ' '} className='form-control w-100' />
                            <span>Rating</span>
                            <input required {...register("rating")} value={reviewCount} /* onChange={handleReviewCount} */ className='form-control w-100' />
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

                    <span className='fw-bold fs-6 mt-2 mb-1'>Your Address</span>
                    <input required {...register("address")} placeholder='Enter your address' className='form-control w-100' />
                    <span className='fw-bold fs-6 mt-2'>Description</span>
                    <textarea {...register("description")} placeholder='Write your description' className='form-control w-100' />
                    <input type="submit" className='btn-primary' />
                </form>
            </div>

        </div>
    );
};

export default Review;