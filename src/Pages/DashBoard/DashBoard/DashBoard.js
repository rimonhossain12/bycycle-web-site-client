import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import './DashBoard.css';

const DashBoard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className='dashboard'>
            <Banner />
            <div class="dashboard-container">
                <div class="row">
                    <div class="col-sm-12 col-md-2 col-lg-2 text-start link-div">
                        <h6 className='text-uppercase fw-bold mt-2 text-center'>User Dashboard</h6>
                        <ul>
                            <li>
                                <i class="fas fa-user-circle" style={{color:'dark'}}></i>
                                <Link to={`${url}/rendering`} className='list-style'>Profile</Link>
                            </li>
                            <li>
                                <i class="fas fa-shopping-cart"></i>
                                <Link to={`${url}/components`} className='list-style'>My Order</Link>
                            </li>
                            <li>
                                <i class="fab fa-amazon-pay"></i>
                                <Link to={`${url}/props-v-state`} className='list-style'>Payment</Link>
                            </li>
                            <li>
                                <i class="far fa-comment-dots"></i>
                                <Link to={`${url}/props-v-state`} className='list-style' >Review</Link>
                            </li>
                            <li>
                                <i class="fas fa-th-list"></i>
                                <Link to={`${url}/props-v-state`} className='list-style' >Mange Order</Link>
                            </li>
                            <li>
                                <i class="fas fa-book-reader"></i>
                                <Link to={`${url}/props-v-state`} className='list-style' >Mange Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-10 col-lg-10 text-start item-div">
                        <div>
                            <h4> Hello second div</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default DashBoard;