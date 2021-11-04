import React from 'react';
import Banner from '../banner/Banner';
import Benifits from '../Benifits/Benifits';
import Header from '../Header/Header';
import Packages from '../packages/Packages';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Benifits></Benifits>
        </div>
    );
};

export default Home;