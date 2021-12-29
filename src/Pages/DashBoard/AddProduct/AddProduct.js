import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log('input data',data);
        fetch('http://localhost:5000/Cycle',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId){
                alert('database is added');
                reset();
            }
        })
    }
    return (
        <div className='form-div'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='form-control' {...register("name")} placeholder='Cycle Name' />
                <input className='form-control' type="number" {...register("price")} placeholder='Cycle Price' />
                <input className='form-control' {...register("img")} placeholder='img url' />
                <textarea className='form-control'{...register("description")} placeholder='write some description' />
                <input type="submit" value="Add Service"/>
            </form>
        </div>
    );
};

export default AddProduct;