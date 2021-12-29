import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Banner from '../../Home/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import LogOut from '../LogOut/LogOut';
import MangeProduct from '../MangeProduct/MangeProduct';
import MangeAllOrder from '../MangleAllOrder/MangeAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './DashBoard.css';

const DashBoard = () => {
    const { url, path } = useRouteMatch();
    return (
        <div className='dashboard'>
            <Banner />
            <div class="dashboard-container">
                <div class="row">
                    <div class="col-sm-12 col-md-3 col-lg-2 text-start link-div dashboard-link">
                        <h6 className='text-uppercase fw-bold mt-2 text-center'>User Dashboard</h6>
                        <ul>
                            <li>
                                <i class="fas fa-user-circle" style={{ color: 'dark' }}></i>
                                <Link to={`${url}`} className='list-style'>Profile</Link>
                            </li>
                            <li>
                                <i class="fas fa-shopping-cart"></i>
                                <Link to={`${url}/myOrder`} className='list-style'>My Order</Link>
                            </li>
                            <li>
                                <i class="fab fa-amazon-pay"></i>
                                <Link to={`${url}/payment`} className='list-style'>Payment</Link>
                            </li>
                            <li>
                                <i class="far fa-comment-dots"></i>
                                <Link to={`${url}/review`} className='list-style' >Review</Link>
                            </li>
                            <li>
                                <i class="fas fa-th-list"></i>
                                <Link to={`${url}/mangeOrder`} className='list-style' >Mange Order</Link>
                            </li>
                            <li>
                                <i class="fas fa-book-reader"></i>
                                <Link to={`${url}/mangeProduct`} className='list-style' >Mange Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-9 col-lg-10 text-start dashboard-link-div">
                        <div>
                            <Switch>
                                <Route exact path={path}>
                                    <LogOut/>
                                </Route>
                                <Route path={`${path}/myOrder`}>
                                   <MyOrder/>
                                </Route>
                                <Route path={`${path}/payment`}>
                                    <Payment />
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review />
                                </Route>
                                <Route path={`${path}/mangeOrder`}>
                                    <MangeAllOrder />
                                </Route>
                                <Route path={`${path}/mangeProduct`}>
                                    <MangeProduct />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DashBoard;