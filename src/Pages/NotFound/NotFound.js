import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/notfound/4041.jpg';

const NotFound = () => {
    return (
        <div className='container'>
            <div className='mt-5'>
                <img src={img} alt="" className='img-fluid' />
            </div>
            <Link to="/">
                <button className='btn rounded-pill bg-danger text-light'>Back to home</button>
            </Link>
        </div>
    );
};

export default NotFound;