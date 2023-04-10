import React from 'react';

const CategoryData = ({ data }) => {
    const { categoryLogo, categoryName, jobsAvailable } = data;

    return (
        <div className='bg-slate-100 w-50 h-40 p-8 mt-5'>
            <img src={categoryLogo} alt="" />
            <p className='font-bold mt-4 text-black'>{categoryName}</p>
            <p><small>{jobsAvailable}</small></p>
        </div>
    );
};

export default CategoryData;