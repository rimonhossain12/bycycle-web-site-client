import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';
import topBanner from '../../../images/carousel/top-banner.png';
import useAuth from '../../../hooks/useAuth';


const Banner = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={topBanner}
                            width="120"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={HashLink} to="/home#home" className='nav-style'>
                                <span className='' style={{ color: 'white' }}>Home</span>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/loadAllProducts#loadAllProducts" className='nav-style'>
                                <span className='' style={{ color: 'white' }}>Products</span>
                            </Nav.Link>
                            <Nav.Link as={HashLink} to="/dashboard#dashboard" className='nav-style'>
                                <span className='' style={{ color: 'white' }}>DashBoard</span>
                            </Nav.Link>

                            {/* {user.email && <Nav.Link className='nav-style'>
                                <span className='' style={{ color: 'white' }}>
                                    loginUser:{user.displayName}
                                </span>
                            </Nav.Link>} */}

                            {user.email ? <Nav.Link className='nav-style'>
                                <button onClick={logout} className='btn btn-primary badge rounded-pill bg-primary btn-style'>Logout</button>
                            </Nav.Link>:

                                <Nav.Link as={HashLink} to="/login#login" className='nav-style'>
                                    <button className='btn btn-primary badge rounded-pill bg-primary btn-style'>Login</button>
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;