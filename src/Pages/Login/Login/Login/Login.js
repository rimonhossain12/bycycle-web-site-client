import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Login.css';
import loginImg from '../../../../images/login/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
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
        console.log(data);
        e.preventDefault();
    }


    return (
        <div className='container my-5'>
            <Row xs={1} md={2} lg={2} className="g-2" >
                <div className='my-5 form-style'>
                    <h2 className='fw-lighter me-5 mb-3'>Login</h2>
                    <form onSubmit={handleRegistrationSubmit}>
                        <input className='form-control'
                            type="text"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder='Enter your email'
                        />
                        <input
                            className='form-control'
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            placeholder='Enter your password' />
                        <input className="btn btn-primary btn-style" type="submit" value="Login" />
                    </form>
                    <Link to="/register" className='text-decoration-none cursive'>
                        <span className='fw-bold text-info me-5'>New User? Please Register</span>
                    </Link>
                </div>
                <div className='my-5'>
                    <img src={loginImg} alt="" className='img-fluid' />
                </div>
            </Row>
        </div>
    );
};

export default Login;