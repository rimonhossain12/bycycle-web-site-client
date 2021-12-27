import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../images/carousel/1.jpg';
import img2 from '../../../images/carousel/2.jpg';
import Zoom from 'react-reveal/Zoom';

const Navigation = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <Zoom cascade>
                            <h3>Travelling Hill Cycle</h3>
                            <p>One of the most beautiful and comfortable travelling BiCycle.</p>
                        </Zoom>
                        </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Zoom cascade>
                        <h3>Best Road Travelling Cycle</h3>
                        <p>One of the fast running Cycle On the road.</p>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <Zoom cascade>
                            <h3>Travelling Hill Cycle</h3>
                            <p>One of the most beautiful and comfortable travelling BiCycle.</p>
                        </Zoom>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Navigation;