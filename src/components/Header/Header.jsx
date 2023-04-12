import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {

    return (
        // md:flex md:space-x-64 md:items-center justify-between
        <div className='md:flex md:items-center md:space-x-64 border-solid border-2 border-indigo-600 md:h-24 w-full'>

            <h2 className='text-3xl font-bold font-serif text-green-700'>Dream Job</h2>

            <nav className='text-black-400 font-semibold space-x-10'>
                <Link className='hover:text-red-600' to='/'>Home</Link>
                <Link className='hover:text-red-600' to='/statistics'>Statistics</Link>
                <Link className='hover:text-red-600' to='/applied'>Applied Jobs</Link>
                <Link className='hover:text-red-600' to='/blog'>Blog</Link>
            </nav>
            <button className='bg-violet-500 hover:bg-violet-700 text-white'>Star Applying</button>
        </div>
    );
};

export default Header;