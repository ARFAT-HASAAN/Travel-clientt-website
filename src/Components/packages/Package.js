import React from 'react';
import { Link } from 'react-router-dom';

import './package.css'

const Package = (props) => {

    const { img, _id, id, name, desc, price, } = props.singlepakage
    return (
        <div className="shadow-lg" >

            <img className="package-pic" src={img} alt="" />
            <div className='p-3'>
                <h2 className='font-bold text-2xl mb-2 text-gray-900'>{name}</h2>
                <p className='mb-2 text-normal text-gray-500'>{desc}</p>
                <div className='flex justify-between '>
                    <h2 className='font-bold text-2xl'>$ {price}</h2>

                    <Link to={`/orderPlace/${_id}`}> <button className='font-bold py-1 w-28   px-3 bg-pink-600 text-white shadow-sm rounded-lg'>Book Now</button> </Link>

                </div>

            </div>



        </div >
    );
};

export default Package;