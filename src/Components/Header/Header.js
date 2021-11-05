import React from 'react';
import { Link, } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Usefirebase from '../../Hooks/Usefirebase';
import UseAuth from '../Context/UseAuth';

const Header = () => {

    // const { user } = Usefirebase()
    const { user, logout } = UseAuth()

    return (

        <>
            {/* navbar start form here */}
            <div className='bg-gray-900 p-3'>


                <div className='max-w-6xl mx-auto text-white flex justify-between p-4 items-center '>

                    {/* nabar logo  */}
                    <div className='flex items-center'>
                        <div className="logo">

                            <span className='font-bold text-2xl flex'>Travelicious</span>

                        </div>

                        {/* primary nav  */}
                        <div className="primary-nav mx-4 items-center flex align-center hidden md:flex ">

                            <Link className='mr-6 font-bold' to='/home'>Home</Link>
                            <HashLink className='mr-6 font-bold' smooth to="/home#packages">Packages</HashLink>
                            {user?.email && <Link className='m-6  block font-bold' to='/AddService'>Add Service</Link>}
                            <HashLink className='mr-6 font-bold' smooth to="/home#Contact">Contact</HashLink>
                            <HashLink className='mr-6 font-bold' smooth to="/home#Aboute">Aboute</HashLink>






                        </div>
                    </div>


                    {/* secondary nav */}
                    <div className="secondary-nav hidden md:flex  ">

                        {user?.email ? <button onClick={logout} className=' px-2 py-1 rounded-lg bg-green-400 font-bold mx-2  shadow'>log out</button>
                            :

                            <Link to='/login'> <button className=' px-2 py-1 rounded-lg bg-pink-500 mx-2 font-bold'>Login</button>  </Link>
                        }








                    </div>

                    {/* mobaile manu  toggle */}

                    <div className='flex md:hidden' >
                        {/* togle btn  */}
                        <button onClick={() => {
                            const manu = document.getElementById('mobile_manu')
                            manu.classList.toggle('hidden')
                        }}
                            id='mobile_manu_btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>

                </div>

                <div id='mobile_manu' className='hidden text-center'>

                    <div className="primary-nav mx-4 items-center text-white block md:hidden">


                        <Link className='m-6  block font-bold' to='/home'>Home</Link>
                        <HashLink className='mr-6 font-bold' smooth to="/home#packages">Packages</HashLink>
                        {user?.email && <Link className='m-6  block font-bold' to='/AddService'>Add Service</Link>}
                        <HashLink className='m-6  block font-bold' smooth to="/home#Contact">Contact</HashLink>
                        <HashLink className='m-6  block font-bold' smooth to="/home#Aboute">About</HashLink>



                    </div>

                    <div className="secondary-nav block md:hidden ">


                        {user?.email ? <button onClick={logout} className=' px-2 py-1 rounded-lg bg-green-400 font-bold mx-2  shadow'>log out</button>
                            :

                            <Link to='/login'> <button className=' px-2 py-1 rounded-lg bg-pink-500 mx-2 font-bold'>Login</button>  </Link>
                        }




                    </div>



                </div>


            </div>
        </>
    );
};

export default Header;


