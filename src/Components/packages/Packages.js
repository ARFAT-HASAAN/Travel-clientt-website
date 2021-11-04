import React, { useEffect, useState } from 'react';
import Package from './Package';

const Packages = () => {

    const [packages, setpackage] = useState([])

    useEffect(() => {
        fetch('https://warm-taiga-83993.herokuapp.com//services')
            .then(res => res.json())
            .then(data => setpackage(data))

    }, [])

    return (
        <div className='my-4'>
            <div className='w-1/2 mx-auto p-12 text-center ' id='packages'>
                <h2 className='text-2xl py-1'>DON’T MISS</h2>
                <h3 className='text-6xl font-bold py-2'>Special offers</h3>
                <p className='text-2xl py-2 text-gray-600'>There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them </p>
            </div>

            <div className='grid grid-cols-3 gap-4 w-4/5 mx-auto'>

                {
                    packages.map(pako => <Package key={pako.id} singlepakage={pako} ></Package>)
                }

            </div>
        </div>


    );
};

export default Packages;