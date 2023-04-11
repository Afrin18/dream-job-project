import React, { useState } from 'react';
import locationIcon from '../../assets/Icons/Frame-4.png';
import salaryIcon from '../../assets/Icons/Frame.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FeatureData = ({ feature }) => {

    const { companyLogo, jobTitle, companyName, category, type, location, salary, jobDes, jobRes} = feature;
    // console.log(feature)
    const [details, setDetails] = useState([]);

    const handleAddToJobDetails = () => {
        // let newCart = [];
        // const exists = cart.find(pd => pd.id === product.id);
        // if(!exists){
        //     product.quantity = 1;
        //     newCart = [...cart, product];
        // }
        // else{
        //     exists.quantity = exists.quantity + 1;
        //     const remaining = cart.filter(pd => pd.id !== product.id);
        //     newCart = [...remaining, exists];
        // }

        // setCart(newCart);
    }

    return (
        <div className='border border-gray-200 p-8 w-96 rounded'>
            <img src={companyLogo} alt="" />
            <p className='font-bold mt-6 text-lg'>{jobTitle}</p>
            <p className='my-3'>{companyName}</p>
            <div className=''>
                <button className='mr-5 text-sm text-violet-600 hover:text-violet-900 border border-violet-400 hover:border-violet-800 rounded py-1 px-4'>{category}</button>

                <button className='mr-5 text-sm text-violet-600 hover:text-violet-900 border border-violet-400 hover:border-violet-800 rounded py-1 px-4'>{type}</button>
            </div>

            <div className='flex gap-8 my-3'>
                <div className='flex'>
                    <img src={locationIcon} alt="" />
                    <p><small>{location}</small></p>
                </div>
                <div className='flex'>
                    <img src={salaryIcon} alt="" />
                    <p><small>Salary:</small></p>
                    <p><small>{salary}</small></p>
                </div>
            </div>

            <Link to='/viewDetails'>
                <button className='text-white bg-violet-500 hover:bg-violet-700 px-3 py-1 rounded'>View Details</button>
            </Link>
        </div>
    );
};

export default FeatureData;