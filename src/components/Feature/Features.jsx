import React from 'react';
import CategoryData from '../CategoryData/CategoryData';
import FeatureData from '../FeatureData/FeatureData';

const Features = ({ features }) => {

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-black mt-16'>Featured Jobs</h2>
            <p className='text-center my-4'><small>Explore thousands of job opportunities with all the information you need. Its your future</small></p>
            <p></p>
            <div className='grid grid-cols-2 gap-8 justify-items-center'>
                {
                    features.map(feature => <FeatureData 
                        key={feature.id}
                        feature={feature}
                        ></FeatureData>)
                }
            </div>
        </div>
    );
};

export default Features;