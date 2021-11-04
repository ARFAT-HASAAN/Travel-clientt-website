import React from 'react';
import Usefirebase from '../../Hooks/Usefirebase';
import UseAuth from '../Context/UseAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { SingWIthGoogel } = UseAuth()


    const history = useHistory()
    const location = useLocation()

    const redirect_url = location.state?.from || '/home'

    const GoogleLogin = () => {

        SingWIthGoogel()
            .then(result => {
                history.push(redirect_url)
            })

    }
    // const { SingWIthGoogel } = Usefirebase()
    return (
        <div>
            <div className='w-2/4 p-24 mx-auto my-20 bg-gray-100 rounded-lg shadow-lg text-center'>

                <h2 className='font-bold text-3xl text-center'>Login with</h2>
                <button onClick={GoogleLogin} className='font-bold text-center w-24 mx-auto bg-green-400 rounded-lg shadow-lg text-white py-2 my-4'>Google</button> <br />

            </div>
        </div>
    );
};

export default Login;