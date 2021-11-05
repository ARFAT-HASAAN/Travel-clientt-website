import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react"
// import { useEffect, useState } from 'react/cjs/react.development';

const Orderplace = () => {

    const [products, setProduct] = useState([])
    const [ChoceProduct, SetChooseProduct] = useState({})

    const { productId } = useParams()

    useEffect(() => {
        fetch('https://warm-taiga-83993.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        const ChoceProduct = products.find(product => product?._id === productId)

        SetChooseProduct(ChoceProduct)
        // console.log(ChoceProduct)
    }, [products, productId])



    return (
        <div className='w-2/4 mx-auto my-16'>
            <div className="shadow-lg text-center" >

                <img className="package-pic" src={ChoceProduct?.img} alt="" />
                <div className='p-3'>
                    <h2 className='font-bold text-2xl mb-2 text-gray-900'>{ChoceProduct?.name}</h2>
                    <p className='mb-2 text-normal text-gray-500'>{ChoceProduct?.desc}</p>
                    <div className='text-center '>
                        <h2 className='font-bold text-2xl'>$ {ChoceProduct?.price}</h2>

                        <Link to='/Details'> <button className='font-bold py-1 w-28   px-3 bg-pink-600 text-white shadow-sm rounded-lg my-2'>Order place</button> </Link>

                    </div>

                </div>
            </div>
        </div>

    );
};

export default Orderplace;