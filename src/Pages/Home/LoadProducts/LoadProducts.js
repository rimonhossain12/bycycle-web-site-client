import React from 'react';
import './LoadProducts.css';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';

const LoadProducts = ({ product }) => {
    const { name, img, price, description,_id } = product;

    return (
        <>
            <Zoom cascade>
                <div className='mt-5'>
                    <div className="shadow p-3 mb-5 bg-body rounded div-height">
                        <div className="image">
                            <div id="zoom-In">
                                <figure>
                                    <img id="img-style" src={img} className='img-fluid' style={{ width: '50%' }} alt="" />
                                </figure>
                                <h5 className="fw-lighter" style={{ color: '#22789A' }}>{name}</h5>
                                <h6 className="fw-normal" style={{ color: '#05445D' }}>${price}</h6>
                                <p className='fw-normal text-center'>{description}</p>
                            </div>
                            <Link to={`/order/${_id}`}>
                                <button className="btn-style btn btn-primary badge rounded-pill bg-primary">shop Now</button>
                            </Link>
                          
                        </div>
                    </div>
                </div>
            </Zoom>
        </>

    );
};

export default LoadProducts;