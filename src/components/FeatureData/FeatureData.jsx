import React from 'react';
import locationIcon from '../../assets/Icons/Frame-4.png';
import salaryIcon from '../../assets/Icons/Frame.png';
import { Link } from 'react-router-dom';

const FeatureData = ({ feature }) => {
    // console.log(feature);

    const { companyLogo, jobTitle, companyName, category, type, location, salary } = feature;

    return (
        <div className='border-2 border-gray-300 p-8 w-96'>
            <img src={companyLogo} alt="" />
            <p>{jobTitle}</p>
            <p>{companyName}</p>
            <div>
                <button>{category}</button>
                <button>{type}</button>
            </div>

            <div className='flex gap-8'>
                <div className='flex'>
                    <img src={locationIcon} alt="" />
                    <p><small>{location}</small></p>
                </div>
                <div className='flex'><small>Salary:</small>
                    <img src={salaryIcon} alt="" />
                    <p><small>{salary}</small></p>
                </div>
            </div>

            <Link to='/viewDetails'>
                <button className='text-white bg-violet-500 hover:bg-violet-700'>View Details</button>
            </Link>
        </div>
    );
};

export default FeatureData;