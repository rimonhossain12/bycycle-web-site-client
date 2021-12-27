import React from 'react';

const LoadProducts = ({ product }) => {
    const { name, img, price, desription } = product;
    let cnt = 1;
    return (
        <div className='mt-5'>
            <div>
                <img src={img} className='img-fluid' alt="" />
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default LoadProducts;