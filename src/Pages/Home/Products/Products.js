import React from 'react';
import { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import LoadProducts from '../LoadProducts/LoadProducts';

//https://shrouded-taiga-93469.herokuapp.com

const Products = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();
    useEffect(() => {
        fetch('https://cycle-server.onrender.com/products')
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
                {isLoading && <div class="spinner-border" style={{ width: "6rem", height: "6rem", role: 'status' }}>
                    <span class="visually-hidden">Loading...</span>
                </div>}
                {
                    !isLoading &&
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
                }

                {/* </Zoom> */}
            </div>
        </div>

    );
};

export default Products;