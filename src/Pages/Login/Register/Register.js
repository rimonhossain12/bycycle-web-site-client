import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [data, setData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
        e.preventDefault();
    }

    const handleRegistrationSubmit = e => {
        if(data.password !== data.password2){
            alert(`password didn't matched`);
            return;
        }
        e.preventDefault();
    }

    return (
        <div>
            <div className='my-5 form-style'>
                <h2 className='fw-lighter me-5 mb-3'>Register</h2>
                <form onSubmit={handleRegistrationSubmit}>
                    <input className='form-control'
                        type="text"
                        name="name"
                        onBlur={handleOnBlur}
                        placeholder='Enter your Name'
                    />
                    <input
                        className='form-control'
                        type="email"
                        name="email"
                        onBlur={handleOnBlur}
                        placeholder='Enter your email' />
                    <input
                        className='form-control'
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        placeholder='Type a hard password' />
                    <input
                        className='form-control'
                        type="password"
                        name="password2"
                        onBlur={handleOnBlur}
                        placeholder='ReType your password' />

                    <input className="btn btn-primary btn-style" type="submit" />
                </form>
                <Link to="/login" className='text-decoration-none cursive'>
                    <span className='fw-bold text-info me-5'>Already Register? Please Login</span>
                </Link>
            </div>
        </div>
    );
};

export default Register;