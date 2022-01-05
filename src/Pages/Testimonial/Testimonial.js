import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';


const Testimonial = () => {
    const [review,setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/client/review')
        .then(res => res.json())
        .then(data => setReview(data));
    },[])
    return (
        <div className='mt-5 mb-5'>
            <Zoom bottom cascade>
                <p className='fw-lighter fs-5'>What's our client says</p>                
            </Zoom>
            <h4>Total loaded data: {review.length}</h4>
        </div>
    );
};

export default Testimonial;