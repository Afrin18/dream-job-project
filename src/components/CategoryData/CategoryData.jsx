import React from 'react';

const CategoryData = ({data}) => {
    const {categoryLogo, categoryName, jobsAvailable} = data;
    return (
            // <div className='mt-4 flex flex-1 gap-4 w-60 h-50'> 
                <div className='bg-slate-100 w-50 h-40 p-8 mt-5'>
                    <img src={categoryLogo} alt=""/>
                    <p className='font-bold mt-4 text-black'>{categoryName}</p>
                    <p><small>{jobsAvailable}</small></p>
                </div>
            //  {/* </div> */}
    );
};

export default CategoryData;