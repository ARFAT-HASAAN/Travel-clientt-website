import React from 'react';
import { Redirect, Route } from 'react-router';
import UseAuth from '../Context/UseAuth';

const PrivateRoute = ({ children, ...rest }) => {

    const { user, isloading } = UseAuth()
    console.log(user)
    if (isloading) {

        return <h2 className='text-center fond-bold m-24 text-3xl'><svg class="animate-spin h-5 w-5 mr-3 text-pink-400  " viewBox="0 0 24 24"></svg> loading ... </h2>

        // return <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>

    }

    return (
        <Route

            {...rest}

            render={({ location }) =>
                user?.email ? children :
                    <Redirect

                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    >

                    </Redirect>
            }

        >

        </Route>
    );
};

export default PrivateRoute;