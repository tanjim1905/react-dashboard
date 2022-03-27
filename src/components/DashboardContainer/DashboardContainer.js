import React from 'react';
import { BsHeart } from 'react-icons/bs';
import Chart from '../Chart/Chart';

const DashboardContainer = () => {
    return (
        <div>
            <div>
                <h3 className='text-2xl'>Overview</h3>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-6 lg:gap-x-6'>
                <div className='flex items-center gap-x-3 bg-white px-8 py-6 rounded-lg'>
                    <div className='w-12 h-12 rounded-full bg-sky-200 flex justify-center items-center'>
                        <BsHeart className='text-sky-600' />
                    </div>
                    <div>
                        <p className='text-xl'>178</p>
                        <p className='capitalize'>recieved queries</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-3 bg-white px-8 py-6 rounded-lg'>
                    <div className='w-12 h-12 rounded-full bg-sky-200 flex justify-center items-center'>
                        <BsHeart className='text-sky-600' />
                    </div>
                    <div>
                        <p className='text-xl'>178</p>
                        <p className='capitalize'>recieved queries</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-3 bg-white px-8 py-6 rounded-lg'>
                    <div className='w-12 h-12 rounded-full bg-sky-200 flex justify-center items-center'>
                        <BsHeart className='text-sky-600' />
                    </div>
                    <div>
                        <p className='text-xl'>178</p>
                        <p className='capitalize'>recieved queries</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-3 bg-white px-8 py-6 rounded-lg'>
                    <div className='w-12 h-12 rounded-full bg-sky-200 flex justify-center items-center'>
                        <BsHeart className='text-sky-600' />
                    </div>
                    <div>
                        <p className='text-xl'>178</p>
                        <p className='capitalize'>recieved queries</p>
                    </div>
                </div>
            </div>

            <Chart />
        </div>
    );
};

export default DashboardContainer;