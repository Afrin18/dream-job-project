import React from 'react';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category = useLoaderData();
    // console.log(category);
    return (
        <div className='mt-10'>
            <Banner></Banner>
            <CategoryList category={category}></CategoryList>
            
        </div>
    );
};

export default Home;