import React from 'react';
import { Col } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";


import './Review.css';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log('user review', data);
        fetch('http://localhost:5000/user/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('thanks! for your review');
                    reset()
                }
            })
    };

    return (
        <div className='review-main'>
            <div className='review-div'>
                <h2 className='fw-bold mb-4 mt-4 mb-0'>Give A Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Col className='mt-5'>
                        <span className='fs-6 fw-bold mb-1' >Your Name</span>
                        {/* <input className='form-control w-100' name='userName' onBlur={handleOnBlur} value={user.displayName} type="text" /> */}
                        <input {...register("userName")} value={user.displayName || ' '} className='form-control w-100' />
                        <span>Rating</span>
                        <input required {...register("rating")} placeholder='Enter your rating' /* onChange={handleReviewCount} */ className='form-control w-100' />
                    </Col>

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