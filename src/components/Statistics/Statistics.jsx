import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Statistics = () => {

    const marksArray = [
        { 
            id: 1, 
            assign_name: "Assignment 1", 
            marks: 60 , 
        },
        { 
            id: 2, 
            assign_name: "Assignment 2", 
            marks: 59,
        },
        { 
            id: 3, 
            assign_name: "Assignment 3", 
            marks: 59,
        },
        { 
            id: 4, 
            assign_name: "Assignment 4", 
            marks: 57, 
        },
        { 
            id: 5, 
            assign_name: "Assignment 5", 
            marks: 53, 
        },
        { 
            id: 6, 
            assign_name: "Assignment 6", 
            marks: 38,
        },
        { 
            id: 7, 
            assign_name: "Assignment 7", 
            marks: 60, 
        },
        { 
            id: 8, 
            assign_name: "Assignment 8", 
            marks: 52, 
        }
    ];


    return (
        <div className='mt-20'>
            <h2 className='text-center font-semibold text-2xl mb-10'>Statistics</h2>

            <AreaChart
            width={1000}
            height={300}
            data={marksArray}
            >
                <Area dataKey="marks"></Area>
                <XAxis dataKey="assign_name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </AreaChart>
        </div>
    );
};

export default Statistics;