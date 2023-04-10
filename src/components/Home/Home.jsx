import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import { useLoaderData } from 'react-router-dom';
import Features from '../Feature/Features';

const Home = () => {
    const features = useLoaderData();
    // console.log(category);

    return (
        <div className='mt-10'>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <Features features={features}></Features>
        </div>
    );
};

export default Home;