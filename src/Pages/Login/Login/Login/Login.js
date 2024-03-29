import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import './Login.css';
import loginImg from '../../../../images/login/login.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import googleImg from '../../../../images/login/gogole.webp';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { signInWithEmailPassword, isLoading, authError, user, googleSingIn } = useAuth();
 
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...loginData };
        newData[field] = value;
        setLoginData(newData);
    }
    const handleRegistrationSubmit = e => {
        signInWithEmailPassword(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleButton = e => {
        googleSingIn(location,history);
        e.preventDefault();
    }

    return (
        <>
            {isLoading && 
                <div class="spinner-border" style={{ width: "6rem", height: "6rem", role: 'status' }}>
                    <span class="visually-hidden">Loading...</span>
                </div>
            }
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
                                />
                                <input
                                    className='form-control'
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                    placeholder='Enter your password'
                                />
                                <input className="btn btn-primary btn-style" type="submit" value="Login"/>
                          
                            <Link to="/register" className='text-decoration-none cursive'>
                                <span className='fw-bold text-info me-5'>New User? Please Register</span>
                            </Link>
                                {isLoading && <div class="spinner-border" style={{ width: "6rem", height: "6rem", role: 'status' }}>
                                    <span class="visually-hidden">Loading...</span>
                                </div>}
                                {user?.email && <div class="alert alert-info" role="alert">
                                   Login Successfully
                                </div>}
                                {authError && <div class="alert alert-info" role="alert">
                                    {authError}
                                </div>}
                            </form>
                            <div class="col s12 m6 offset-m3 center-align">
                                <a class="oauth-container btn darken-4 white black-text" href="/users/google-oauth/" style={{textTransform:"none"}}>
                                    <div onClick={handleGoogleButton} class="left">
                                        <img width="40px" alt="Google sign-in" style={{marginTop:'10px', marginRight:'8px'}}
                                            src={googleImg}/>
                                    </div>
                                </a>
                            </div>
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