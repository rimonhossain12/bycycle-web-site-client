import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import TestiMonialsDetails from '../TestiMonialsDetails/TestiMonialsDetails';
import Zoom from 'react-reveal/Zoom';




const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://cycle-server.onrender.com/client/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='py-5'>
            <Zoom bottom cascade>
                <h4 className='fw-normal text-info'>What's our client says</h4>
                <hr className='fw-normal mx-auto' style={{ width: '15%', border: '0px', fontFamily:'Lobster'}} />
            </Zoom>
            <div className='container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        reviews.map(review => <TestiMonialsDetails key={review._id}
                            review={review}
                        >

                        </TestiMonialsDetails>)
                    }
                </Row>

            </div>
        </div>
    );
};

export default Testimonials;