import React from 'react';
import bannerImage from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='flex space-x-70 items-center'>
            <div className='ml-0'>
                <h2 className='text-6xl font-semibold font-serif'>
                    <span>One Step</span><br/> 
                    <span className=''>Closer To Your</span><br/>
                    <span className='text-violet-500'>Dream Job</span>
                </h2>
                <p className=''>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-white bg-violet-500 hover:bg-violet-700 mt-8'>Get Started</button>
            </div>
            <div>
                <img className='w-screen' src={bannerImage} alt=""/>
            </div>
        </div>
    );
};

export default Banner;