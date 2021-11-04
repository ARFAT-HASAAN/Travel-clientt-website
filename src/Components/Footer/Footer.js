import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 p-12 text-white'>
            {/* contact  */}
            <div className='flex flex-col md:flex-row md:justify-between  px-6'>

                {/* navbar brand  */}
                <div className="text-center">
                    <div>
                        <h2 className='mb-8'>Travelicious</h2>

                        <p> You can rest assured we’ll have the capacity <br /> to make you
                            feel comfortable as we leave <br /> the techy stuff and we focus on helping people. </p>
                    </div>


                    <br />


                </div>

                <div id='Contact' className='text-left md:text-center'>

                    <div className='text-center  md:text-left space-y-3'>
                        <h2 className='text-center md:text-left'>Contact us</h2>
                        <p>
                            +01852-1265122
                        </p>

                        <p>
                            info@example.com
                        </p>


                        <p>
                            2752 Willison Street
                            Eagan, United State

                        </p>

                    </div>
                </div>


                <div className='text-center space-y-2'>
                    <h2>Get to Know Us</h2>
                    <a className='block' href="#">Home</a>
                    <a className='block' href="#">Contact</a>
                    <a className='block' href="#">Blog</a>
                    <a className='block' href="#">About</a>

                </div>
            </div>

            {/* main footer  */}
            <div className='text-white pt-4 font-bold text-center '>
                <p> Travel The world &copy; 2020 | All Rights Reserved</p>
            </div>

        </div >
    );
};

export default Footer;