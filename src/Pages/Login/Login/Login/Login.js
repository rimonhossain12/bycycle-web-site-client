import React, { useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './Login.css';
import loginImg from '../../../../images/login/login.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithEmailPassword, isLoading } = useAuth();
    console.log(isLoading);
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
        e.preventDefault();
    }
    const handleRegistrationSubmit = e => {
        signInWithEmailPassword(loginData.email, loginData.password, location, history);
        loginData.email = ' ';
        loginData.password = ' ';
        e.preventDefault();
    }


    return (
        <>
            {isLoading && <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>}
            {!isLoading &&
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
                                    defaultValue='Enter your email'
                                />
                                <input
                                    className='form-control'
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder='Enter your password'
                                    defaultValue="Enter your password"
                                />
                                <input className="btn btn-primary btn-style" type="Submit" value="Login"/>
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
            }
        </>

    );
};

export default Login;