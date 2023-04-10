import React from 'react';
import icon1 from '../../assets/Icons/accounts 1.png';

const CategoryList = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-black mt-16'>Job Category List</h2>
            <p className='text-center my-4'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <div className='mt-4 flex gap-10 justify-center'>
                <div className='w-50 h-40 bg-slate-50 p-8'>
                    <img src={icon1} alt=""/>
                    <p className='font-bold mt-4 text-black'></p>
                    <p><small></small></p>
                </div>

                <div className='w-50 h-40 bg-sky-300 p-8'>
                    <p></p>
                    <p></p>
                </div>

                <div className='w-50 h-40 bg-sky-300 p-8'>
                    <p></p>
                    <p></p>
                </div>

                <div className='w-50 h-40 bg-sky-300 p-8'>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;