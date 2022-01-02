import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Banner from '../../Home/Banner/Banner';
import AdminRoute from '../../Login/AmdinRoute/AdminRoute';
import Footer from '../../Shared/Footer/Footer';
import LogOut from '../LogOut/LogOut';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MangeProduct from '../MangeProduct/MangeProduct';
import MangeAllOrder from '../MangleAllOrder/MangeAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import './DashBoard.css';

const DashBoard = () => {
    const { url, path } = useRouteMatch();
    const {admin} = useAuth();
    return (
        <div className='dashboard'>
            <Banner />
        <div class="dashboard-container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-3 text-start link-div dashboard-link">
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
                            {admin && <div>
                                <li>
                                    <i class="fas fa-th-list"></i>
                                    <Link to={`${url}/mangeOrder`} className='list-style' >Mange Order</Link>
                                </li>
                                <li>
                                    <i class="fas fa-book-reader"></i>
                                    <Link to={`${url}/mangeProduct`} className='list-style' >Mange Products</Link>
                                </li>
                                <li>
                                    <i class="fas fa-book-reader"></i>
                                    <Link to={`${url}/makeAdmin`} className='list-style' >MakeAdmin</Link>
                                </li></div>}
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-9 text-start dashboard-link-div">
                        <div>
                            <Switch>
                                <Route exact path={path}>
                                    <LogOut />
                                </Route>
                                <Route path={`${path}/myOrder`}>
                                    <MyOrder />
                                </Route>
                                <Route path={`${path}/payment`}>
                                    <Payment />
                                </Route>
                                <Route path={`${path}/review`}>
                                    <Review />
                                </Route>
                                <AdminRoute path={`${path}/mangeOrder`}>
                                    <MangeAllOrder />
                                </AdminRoute>
                                <AdminRoute path={`${path}/mangeProduct`}>
                                    <MangeProduct />
                                </AdminRoute>
                                <AdminRoute path={`${path}/makeAdmin`}>
                                    <MakeAdmin />
                                </AdminRoute>
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