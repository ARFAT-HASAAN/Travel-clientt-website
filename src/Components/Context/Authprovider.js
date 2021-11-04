import React, { createContext } from 'react';
import Usefirebase from '../../Hooks/Usefirebase';


export const AuthContext = createContext()
const Authprovider = (props) => {
    const { children } = props;

    const allContext = Usefirebase();

    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;