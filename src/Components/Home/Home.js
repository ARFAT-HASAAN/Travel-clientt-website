import React from 'react';
import Banner from '../banner/Banner';
import Benifits from '../Benifits/Benifits';
import Header from '../Header/Header';
import Packages from '../packages/Packages';
import Them from '../theme/Them';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Them></Them>
            <Benifits></Benifits>
        </div>
    );
};

export default Home;