import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import LoadProducts from '../Home/LoadProducts/LoadProducts';



const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <div>
            <div className='mt-5'>
                <Zoom left cascade>
                    <h4 className='text-center text-capitalize fw-bold' style={{ color: '#76D7C4' }}>Wonderful BiCycle Collection in the world</h4>
                </Zoom>
            </div>
            <div className='container'>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                        products.map(product => <LoadProducts key={product._id}
                            product={product}
                        ></LoadProducts>)
                    }
                </Row>
            </div>
        </div>

    );
};

export default Products;