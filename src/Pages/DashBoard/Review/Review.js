import React from 'react';
import { useForm } from "react-hook-form";
import './Review.css';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='review-main'>
            <div className='review-div'>
                <h2 className='fw-bold fs-4 text-warning mb-4'>Give Us Feedback</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("firstName", { required: true, maxLength: 20 })} />
                    <span>Rating</span>
                    <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    <input type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;