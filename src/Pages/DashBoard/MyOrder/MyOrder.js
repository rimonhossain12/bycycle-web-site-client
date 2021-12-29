import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './MyOrder.css';
import { MdDelete } from "react-icons/md";

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    const url = `http://localhost:5000/users/${user.email}`
    // console.log('url found', url);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrders(data)
            })
    }, [url, user.email]);

    const handleCancelButton = (id) => {
        const isTrue = window.confirm('Are you sure? You want to delete order?');
        if (isTrue) {
            const url = `http://localhost:5000/orders/${id}`;
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
                    <h4>Your orders list</h4>
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