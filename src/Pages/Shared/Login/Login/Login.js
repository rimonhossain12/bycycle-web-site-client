import React from 'react';
import { Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Login.css';
import loginImg from '../../../../images/login/login.png';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='container my-5'>
            <Row xs={1} md={2} lg={2} className="g-2" >
                <div className='my-5 form-style'>
                    <h2 className='fw-lighter me-5 mb-3'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='form-control' {...register("email")} placeholder='Enter your email' />
                        <input type="password" className='form-control' {...register("password")} placeholder='Enter your password' />
                        <input className="btn btn-primary btn-style" type="submit" />
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