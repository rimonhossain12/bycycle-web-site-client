import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://cycle-server.onrender.com/makeAdmin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then()
    };
    return (
        <div className='mt-4'>
            <h2>This is Make Admin Folder</h2>
            <div className='make-admin ms-5'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email")} className='form-control w-50' placeholder='Enter email address' />
                    <p></p>
                    <button type='submit' className='btn btn-primary ms-5'> Make Admin</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;