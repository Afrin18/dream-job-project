import React from 'react';
import CategoryData from '../CategoryData/CategoryData';
import { useState } from 'react';
import { useEffect } from 'react';

const CategoryList = () => {
    const [datas, setDatas] = useState([]);
    useEffect( () => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])

    return (
        <div className="sm:w-50">
            <h2 className='text-4xl font-bold text-center text-black mt-16'>Job Category List </h2>
            <p className='text-center my-4'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <div className='md:flex md:items-center md:justify-center gap-10 '>
                {
                    datas.map(data => <CategoryData
                        key={data.id}
                        data={data}
                    ></CategoryData>)
                }
            </div>
        </div>
    );
};

export default CategoryList;