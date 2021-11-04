import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900 p-12 text-white'>
            {/* contact  */}
            <div className='flex justify-between px-6'>

                {/* navbar brand  */}
                <div>
                    <div>
                        <div className='flex' id='Aboute'>
                            <svg className='h-8 w-12 mr-2' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <span>
                                vpx hotel
                            </span>
                        </div>


                        <br />

                        <div>
                            <p> You can rest assured we’ll have the capacity <br /> to make you
                                feel comfortable as we leave <br /> the techy stuff and we focus on helping people. </p>
                        </div>


                        <br />
                        <h2>Follow us</h2>
                        <div>
                            <a href="#">dfsd</a>
                            <a href="#">dfsf</a>
                            <a href="#">dsf</a>
                            <a href="#">dfs</a>

                        </div>

                    </div>


                </div>


                <div id='Contact'>
                    <h2>Contact us</h2>
                    <div>
                        <p>
                            +01852-1265122
                            <br />
                            +01852-1265122</p>

                        <br />
                        <p>

                            info@example.com
                            <br />
                            support@example.com
                        </p>


                        <br />
                        <p>
                            2752 Willison Street
                            <br />
                            Eagan, United State

                        </p>

                    </div>
                </div>


                <div>
                    <a className='block' href="#">Home</a>
                    <a className='block' href="#">Contact</a>
                    <a className='block' href="#">Blog</a>
                    <a className='block' href="#">About</a>

                </div>
            </div>

            {/* main footer  */}
            <div className='text-white pt-8 font-bold text-center '>
                <p> Travel The world &copy; 2020 | All Rights Reserved</p>
            </div>

        </div>
    );
};

export default Footer;