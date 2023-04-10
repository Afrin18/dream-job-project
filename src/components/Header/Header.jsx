import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex space-x-96 items-center border-solid border-2 border-indigo-600 w-full h-24'>
            <h2 className='text-3xl font-bold font-serif text-green-700'>Dream Job</h2>
            <nav className='text-black-400 font-semibold space-x-10'>
                <Link className='hover:text-red-600' to='/home'>Home</Link>
                <Link className='hover:text-red-600' to='/statistics'>Statistics</Link>
                <Link className='hover:text-red-600' to='/applied'>Applied Jobs</Link>
                <Link className='hover:text-red-600' to='/blog'>Blog</Link>

                <button className='bg-violet-500 hover:bg-violet-700 text-white'>Star Applying</button>
            </nav>
        </div>
    );
};

export default Header;