import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';
import footerImg from '../../../images/carousel/top-banner.png';
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <>
            <div className='footer-bg pb-1 mt-5'>
                <div className='container'>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <Col className='footer-div1 text-start'>
                            <Zoom cascade>
                                <img id="footer-img" src={footerImg} alt="" className='img-fluid mt-5'
                                />
                                <p className='text-start mt-3'>One of the best cycle selling store in online</p>
                                <ul className='icon-ul text-start'>
                                    <li><FaTwitter size={30} /></li>
                                    <li><FaFacebookF size={30} /></li>
                                    <li><FaInstagram size={30} /></li>
                                    <li><FaWhatsapp size={30} /></li>
                                    <li><FaLinkedinIn size={30} /></li>

                                </ul>
                            </Zoom>
                        </Col>
                        <Col>
                            <Zoom cascade>
                            <h4 style={{ color: '#669DBF' }} className="text-start ms-4">Shop</h4>
                            <ul className="list-style text-start">
                                <li>Shopping</li>
                                <li>Bicycle</li>
                                <li>Bicycle Accessory</li>
                                <li>Helmet</li>
                            </ul>
                            </Zoom>
                        </Col>
                        <Col>
                            <Zoom cascade>
                                <h4 style={{ color: '#669DBF' }} className="text-start ms-4">About Us</h4>
                                <ul className="list-style text-start">
                                    <li>About Us</li>
                                    <li>Pagination</li>
                                    <li>Terms & Condition</li>
                                    <li>Contact</li>
                                    <li>Accessories</li>
                                    <li>Term of use</li>
                                </ul>
                            </Zoom>
                        </Col>
                        <Col>
                            <Zoom cascade>
                                <h4 style={{ color: '#669DBF' }} className="text-start ms-4">Information</h4>
                                <ul className="list-style text-start">
                                    <li>Address</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Condition</li>
                                    <li>Products Return</li>
                                    <li>Accessories</li>
                                    <li>Wholesale Policy</li>
                                </ul>
                            </Zoom>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='bg-dark p-1'>
                <p id="footer-para">copyright&copy; by Rimon</p>
            </div>
        </>
    );
};

export default Footer;