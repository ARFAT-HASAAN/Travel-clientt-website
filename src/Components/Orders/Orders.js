import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {

    const [reviewporducts, setReviewProduct] = useState([])

    useEffect(() => {
        fetch('http://localhost:2000/orders')
            .then(res => res.json())
            .then(data => setReviewProduct(data))
    }, [])


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 my-20 gap-4 w-4/5 mx-auto'>
            {
                reviewporducts.map(reprodct =>
                    <div className="shadow-lg" >

                        <img className="package-pic" src={reprodct?.img} alt="" />
                        <div className='p-3'>
                            <h2 className='font-bold text-2xl md:text-xl mb-2 text-gray-900'>{reprodct?.name}</h2>
                            <p className='mb-2 text-normal text-gray-500'>{reprodct?.desc}</p>
                            <div className='flex justify-between '>
                                <h2 className='font-bold text-base md:text-xl'>$ {reprodct?.price}</h2>

                                <Link to={`/orderPlace/${reprodct?._id}`}> <button className='font-bold py-1 w-28   px-3 bg-pink-600 text-white shadow-sm rounded-lg'>Delete</button> </Link>

                            </div>

                        </div>



                    </div >
                )
            }

        </div>
    );
};

export default Orders;