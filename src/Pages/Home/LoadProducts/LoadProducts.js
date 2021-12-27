import React from 'react';
import './LoadProducts.css';

const LoadProducts = ({ product }) => {
    const { name, img, price, description } = product;

    return (
        <div className='mt-5'>
            <div className="shadow p-3 mb-5 bg-body rounded div-height">
                <div class="image">
                    <div id="zoom-In">
                        <figure>
                            <img id="img-style" src={img} className='img-fluid' style={{width:'50%'}} alt="" />
                        </figure>
                        <h5 class="fw-lighter" style={{ color:'#22789A'}}>{name}</h5>
                        <h6 className="fw-normal" style={{ color: '#05445D' }}>${price}</h6>
                        <p className='fw-normal text-center'>{description}</p>
                    </div>
                    <button className=' btn-style btn btn-primary badge rounded-pill bg-primary"'>shop Now</button>
                </div>
            </div> 
        </div>
    );
};

export default LoadProducts;