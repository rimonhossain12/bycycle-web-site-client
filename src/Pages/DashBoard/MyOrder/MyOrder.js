import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
import { MdDelete } from "react-icons/md";
import { useHistory } from 'react-router-dom';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const history = useHistory()

    // const url = `https://cycle-server.onrender.com/myOrders/${user.email}`
    const url = `http://localhost:5000/myOrders/${user.email}`

    useEffect(() => {
        fetch(url, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                }
                else if (res.status === 401) {
                    history.push('/login');
                }
            })
            .then(data => {
                // console.log(data);
                setOrders(data)
            })
    }, [history, url]);

    const handleCancelButton = (id) => {
        const isTrue = window.confirm('Are you sure? You want to delete order?');
        if (isTrue) {
            const url = `https://cycle-server.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orders)
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = orders.filter(order => order._id !== id);
                    setOrders(remainingData);
                }, [id])
        }
    }

    return (
        <div>
            <div style={{ marginLeft: '50px' }} className='mt-3'>
                <div className="table-responsive">
                    <h4 className='fw-lighter mb-4 text-warning'>Your orders list</h4>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>IMG</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>price</th>
                                <th>location</th>
                                <th>phone</th>
                                <th>status</th>
                                <th>Decision</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <>
                                    <tr>
                                        <td><img src={order.img} style={{ height: '50px', width: '100%' }} alt="" /></td>
                                        <td>{order.userName}</td>
                                        <td>{order.email}</td>
                                        <td>${order.price}</td>
                                        <td>{order.location}</td>
                                        <td>{order.phone}</td>
                                        <td className='text-danger fw-lighter text-center'>pending...</td>
                                        <button onClick={() => handleCancelButton(order._id)} className='btn btn-danger my-2 fw-bold ms-3'><MdDelete size={25} />Cancel</button>

                                    </tr>
                                </>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;