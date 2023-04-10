import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryData from '../CategoryData/CategoryData';

const CategoryList = ({ category }) => {
    // const data = useLoaderData();
    // console.log(category);
    // console.log(category.length);

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-black mt-16'>Job Category List </h2>
            <p className='text-center my-4'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <div className='flex sm:flex-none gap-10 items-center justify-center'>
                {
                    category.map(data => <CategoryData
                        key={data.id}
                        data={data}
                    ></CategoryData>)
                }
            </div>
        </div>
    );
};

export default CategoryList;