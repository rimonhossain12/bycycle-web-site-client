import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Banner from '../Home/Banner/Banner';

const PlaceOrder = () => {
    return (
        <div>
            <Banner/>
           <div className='my-5'>
                <h2 className='fw-lighter'>This is Place order</h2>
                <div className='my-5 container'>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                           <h4 className='fw-light'>See your order</h4>
                        </Col>
                        <Col>
                            <h4 className='fw-light'>Please full fill the information</h4>
                        </Col>
                    </Row>
                </div>
           </div>
        </div>
    );
};

export default PlaceOrder;