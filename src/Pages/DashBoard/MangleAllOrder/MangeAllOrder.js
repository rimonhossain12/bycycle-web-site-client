import React from 'react';
import { useEffect,useState } from 'react';
import { MdDelete } from "react-icons/md";


const MangeAllOrder = () => {
    const [allOrders,setOrders] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setOrders(data))
    } ,[])

    const handleCancelButton = (id) => {
        const isTrue = window.confirm('Are you sure? You want to delete order?');
        if (isTrue) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(allOrders)
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = allOrders.filter(order => order._id !== id);
                    setOrders(remainingData);
                }, [id])
        }
    }
    
    return (
        <div>
            <h2 className='ms-5 fw-lighter text-primary my-3'>Customer All Orders</h2>
            <div style={{ marginLeft: '50px' }} className='mt-3'>
                <div className="table-responsive">
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
                                allOrders.map((order, index) => <>
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

export default MangeAllOrder;