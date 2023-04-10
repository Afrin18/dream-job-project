import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;