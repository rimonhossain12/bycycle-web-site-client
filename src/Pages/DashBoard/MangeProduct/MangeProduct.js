import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { MdDelete } from "react-icons/md";

const MangeProduct = () => {
    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth()
    useEffect(() => {
        fetch('https://cycle-server.onrender.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    const handleCancelButton = (id) => {
        const isTrue = window.confirm('Are you sure? You want to delete order?');
        if (isTrue) {
            const url = `https://cycle-server.onrender.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(products)
            })
                .then(res => res.json())
                .then(data => {
                    const remainingData = products.filter(order => order._id !== id);
                    setProducts(remainingData);
                }, [id])
        }
    }

    return (
        <>
            {isLoading && <div class="spinner-border" style={{ width: "6rem", height: "6rem", role: 'status' }}>
                <span class="visually-hidden">Loading...</span>
            </div>}

            {!isLoading && <div>
                <h4 className='fw-lighter my-3 text-center'>Our All Products</h4>
                <div style={{ marginLeft: '50px' }} className='mt-3'>
                    <div className="table-responsive">
                        <table id="customers">
                            <thead>
                                <tr>
                                    <th>IMG</th>
                                    <th>Name</th>
                                    <th>price</th>
                                    <th>Confirmation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((order, index) => <>
                                        <tr>
                                            <td><img src={order.img} style={{ height: '50px', width: '100%' }} alt="" /></td>
                                            <td className='text-center'>{order.name}</td>
                                            <td className='text-center'>${order.price}</td>
                                            <button onClick={() => handleCancelButton(order._id)} className='btn btn-danger my-2 fw-lighter ms-5'><MdDelete size={25} />Delete</button>

                                        </tr>
                                    </>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default MangeProduct;