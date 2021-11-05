import React from 'react';
import theme from "../../images/theme/theme.jpg";
import themepic1 from "../../images/theme/theme (1).jpg";
import themepic2 from "../../images/theme/theme (2).jpg";
import themepic3 from "../../images/theme/theme (3).jpg";
import themepic4 from "../../images/theme/theme (4).jpg";
import themepic5 from "../../images/theme/theme (5).jpg";
import themepic6 from "../../images/theme/theme (6).jpg";
import './theme.css';
// w - 4 / 5 mx - auto grid cols - 2

const Them = () => {
    return (

        <>
            <div className='w-3/5 mx-auto text-center my-3'>
                <h2 className='font-bold text-gray-600'>OUR TOUR GALLERY</h2>
                <h3 className='font-bold text-2xl md:text-4xl'>BEST TRAVELER'S SHARED PHOTOS</h3>
            </div>
            <div className='row w-4/5 mx-auto'>

                <div className='column'>
                    <img className='w-full' src={themepic6} alt="" />
                    <img className='w-full' src={themepic2} alt="" />
                    <img className='w-full' src={themepic3} alt="" />
                    <img className='w-full' src={theme} alt="" />


                </div>

                <div className='column'>
                    <img className='w-full' src={themepic4} alt="" />
                    <img className='w-full' src={themepic5} alt="" />
                    <img className='w-full ' src={themepic1} alt="" />



                </div>

            </div></>

    );
};

export default Them;