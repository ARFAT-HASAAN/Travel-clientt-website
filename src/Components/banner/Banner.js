import React from 'react';

const Banner = () => {
    return (
        <div className='bg-gray-900 p-4 '>
            <div className='text-center py:4 md:py-12 px:4 md:px-8 '>

                <h1 className='text-white font-sans font-extrabold text-4xl md:text-5xl  p-4 md:p-8 '>Feel Free To Discover Most Engaging Places. </h1>
                <p className='text-gray-400 text-1xl  md:text-2xl font-normal'> Best places for your next travel are here check them out</p>

                <button className='px-3 py-2 rounded-lg bg-pink-500 text-white m-8 font-bold shadow '>Get In Touch</button>
            </div>

        </div>
    );
};

export default Banner;