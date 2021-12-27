import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
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
                            <Nav.Link as={HashLink} to="/home#home" className='nav-style'>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/loadAllProducts#loadAllProducts" className='nav-style'>Products</Nav.Link>
                            {user.email && <Nav.Link  className='nav-style'>{user.displayName}</Nav.Link> }
                            <NavDropdown title="DASHBOARD" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            {user.email ? <button onClick={logout} className='btn btn-primary badge rounded-pill bg-primary btn-style'>LogOut</button> :

                                <Nav.Link as={HashLink} to="/login#login" className='nav-style'>
                                    <button onClick={logout} className='btn btn-primary badge rounded-pill bg-primary btn-style'>Login</button>
                                </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;