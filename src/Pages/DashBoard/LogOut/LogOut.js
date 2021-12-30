import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Logout.css';
import userImg from '../../../images/login/user.png'

const LogOut = () => {
const { user, logout } = useAuth();
    return (
        <div className='container'>
           <div className='profile-main'>
                <div className='profile-div'>
                    <h4 className='fw-lighter mt-2 mb-3'>Profile</h4>
                    <img src={userImg} alt="" className='img-fluid' />
                    <p className='fw-lighter fs-3 mt-3'>{user.displayName}</p>
                    <p className='fw-lighter fs-6 mt-3'>{user.email}</p>
                    <button className='btn btn-primary' onClick={logout}>logout</button>
                </div>
           </div>
        </div>
    );
};

export default LogOut;