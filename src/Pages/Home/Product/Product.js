import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './Product.css';
import product1 from '../../../images/cycle/1.jpg';
import product2 from '../../../images/cycle/2.jpg';
import product3 from '../../../images/cycle/3.jpg';
import product4 from '../../../images/cycle/4.jpg';
import { Row } from 'react-bootstrap';


const Product = () => {
    return (
        <div className='container mt-5 mb-5 text-info'>
            <h2>
                <Zoom bottom cascade>
                    Our best bicycle collection samples
                </Zoom>
                <hr className='text-warning w-50 mx-auto' />
            </h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                <div>
                    <div className='image'>
                        <img className="image__img" src={product1} alt="img not found" />
                        <div className='image__overlay'>
                            <div className='image__title'>Cannodale</div>
                            <p className='image_description'>
                                Super Six EVO
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='image'>
                        <img className="image__img" src={product2} alt="img not found" />
                        <div className='image__overlay'>
                            <div className='image__title'>Giant</div>
                            <p className='image_description'>
                                TCR Advanced SL 0
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='image'>
                        <img className="image__img" src={product3} alt="img not found" />
                        <div className='image__overlay'>
                            <div className='image__title'>Specialized</div>
                            <p className='image_description'>
                               S-Works Tarmac SL7
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='image'>
                        <img className="image__img" src={product4} alt="img not found" />
                        <div className='image__overlay'>
                            <div className='image__title'>BMC</div>
                            <p className='image_description'>
                                Teammachine SLR
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    );
};

export default Product;