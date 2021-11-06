import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {

    const [reviewporducts, setReviewProduct] = useState([])
    //   const [resetproduct, setresetProduct] = useState({})
    useEffect(() => {
        fetch('https://warm-taiga-83993.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setReviewProduct(data))
    }, [])


    // delete services 

    const deleteeProduct = id => {
        const istrue = window.confirm('are you sure you want to delete?')
        if (istrue) {
            const url = `https://warm-taiga-83993.herokuapp.com/orders/${id}`
            fetch(url, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        alert('remove succesfully')
                        const reaminignUSER = reviewporducts.filter(product => product._id !== id)

                        setReviewProduct(reaminignUSER)

                    }

                })
        }
        // console.log(id)

    }



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

                                <button onClick={() => deleteeProduct(reprodct._id)} className='font-bold py-1 w-28   px-3 bg-pink-600 text-white shadow-sm rounded-lg'>Delete</button>

                            </div>

                        </div>



                    </div >
                )
            }

        </div>
    );
};

export default Orders;