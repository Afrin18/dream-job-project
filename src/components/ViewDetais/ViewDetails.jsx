import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const { id } = useParams();
    console.log(id);
    const data = useLoaderData();
    console.log(data)

    const feature = data.find((item) => item.id === parseInt(id));

    // const {id} = useParams();

    // console.log(feature);
    // const { companyLogo, jobTitle, companyName, category, type, location, salary} = feature;

    return (
        <div className='mt-20'>
            <h2 className='text-center font-semibold text-2xl'>Job Details</h2>
            <p><small><b>Job Description: </b>{feature.jobDes}</small></p><br/>
            <p><small><b>Job Responsibility: </b>{feature.jobRes}</small></p><br/>
            <p><small><b>Educational Requirements: </b>{feature.education}</small></p><br/>
            <p><small><b>Experiences: </b>{feature.experience}</small></p><br/>
            <button className='text-white bg-violet-500 hover:bg-violet-700 mt-4'>Apply Now</button>
        </div>
    );
};

export default ViewDetails;