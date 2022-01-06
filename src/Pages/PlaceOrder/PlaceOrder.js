import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Banner from '../Home/Banner/Banner';
import { useForm } from "react-hook-form";
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [singleProduct, setSingleProduct] = useState([]);
    const { user } = useAuth();
    const { productId } = useParams();
    const { register, handleSubmit,reset } = useForm();
    useEffect(() => {
        fetch(`https://shrouded-taiga-93469.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data));
    }, [productId]);

    const onSubmit = data => {
        console.log(data);
        fetch('https://shrouded-taiga-93469.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('order added successfully');
                    reset();
                }
            })
    };


    return (
        <div>
            <Banner />
            <div className='my-5'>
                <h2 className='fw-lighter'>This is PlaceOrder Page</h2>
                <div className='my-5 container'>
                    <Row xs={1} md={2} className="g-4">
                        <div className='mt-5'>
                            <div className="shadow p-3 mb-5 bg-body rounded mx-auto" style={{ width: '75%' }}>
                                <div className="image">
                                    <div id="zoom-In">
                                        <figure>
                                            <img id="img-style" src={singleProduct.img} className='img-fluid' style={{ width: '50%' }} alt="" />
                                        </figure>
                                        <h5 className="fw-lighter" style={{ color: '#22789A' }}>{singleProduct.name}</h5>
                                        <h6 className="fw-normal" style={{ color: '#05445D' }}>${singleProduct.price}</h6>
                                        <p className='fw-normal text-center'>{singleProduct.description}</p>
                                        <span>{singleProduct.img}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Col>
                            <h4 className='fw-light mb-3 text-center'>Please full fill the information</h4>
                            <div className='order-div'>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("email")} value={user.email} />
                                    <input {...register("userName")} value={user.displayName} />
                                    <input {...register("productName")} placeholder='product Name' />
                                    <input {...register("price")} placeholder='product price' />
                                    <input {...register("img")} placeholder='img url' />
                                    <input {...register("location")} placeholder='your address' />
                                    <input {...register("phone")} placeholder='your phone number' />
                                    <input type="submit" value='submit' />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;