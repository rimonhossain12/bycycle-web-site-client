import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import LoadProducts from '../LoadProducts/LoadProducts';



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
                <h4 className='text-center text-capitalize fw-bold mb-5 pb-5' style={{ color: '#99A3A4' }}>
                    <Zoom bottom cascade>
                        Wonderful BiCycle Collection in the world
                    </Zoom>
                </h4>

            </div>
            <div style={{ backgroundColor: '#D6DBDF' }}>
                {/* <Zoom bottom cascade> */}
                    <div className='container'>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {
                            products.map(product => <LoadProducts key={product._id}
                                    product={product}
                                ></LoadProducts>)
                            }
                        </Row>
                    <Link to="/loadAllProducts">
                        <button style={{ width: '20%' }} className="mb-3 p-3 btn-style btn btn-primary badge rounded-pill bg-primary fw-bold">Explore</button>
                        </Link>
                    </div>
                {/* </Zoom> */}
            </div>
        </div>

    );
};

export default Products;