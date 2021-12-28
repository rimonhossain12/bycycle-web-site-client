import React, { useEffect, useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import { Row, Spinner } from 'react-bootstrap';
import LoadAllProducts from '../LoadAllProducts/LoadAllProducts';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import useAuth from '../../../hooks/useAuth';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <>
            {isLoading && <Spinner animation="border" />}
            {!isLoading &&
                <div>
                    <Banner />
                    <div>
                        <div className='mt-5'>
                            <h4 className='text-center text-uppercase fw-bold mb-5 pb-5' style={{ color: 'golden' }}>
                                <Zoom bottom cascade>
                                    All service collection
                                    <hr style={{ width: '15%' }} className='mx-auto text-primary' />
                                </Zoom>
                            </h4>

                        </div>
                        <div style={{ backgroundColor: '#5499C7' }}>
                            {/* <Zoom bottom cascade> */}
                            <div className='container'>
                                <Row xs={1} md={2} lg={3} className="g-4">
                                    {
                                        products.map(product => <LoadAllProducts key={product._id}
                                            product={product}
                                        ></LoadAllProducts>)
                                    }
                                </Row>
                            </div>
                            {/* </Zoom> */}
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </>

    );
};

export default AllProducts;