import React from 'react';
import active from '../../util/assets/images/active.png';

const ActiveInstitutions = () => {
    return (
        <div className='bg-white p-5 rounded-lg'>
            <div>
                <h4 className='capitalize'>
                    Recently Active Institutes
                </h4>
            </div>

            <div className='space-y-2 pt-2'>
                <div className='flex items-center gap-x-2 border-b border-gray-100 pb-2'>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <div className='space-y-0.5'>
                        <p className='uppercase'>abc classes</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 border-b border-gray-100 pb-2'>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <div className='space-y-0.5'>
                        <p className='uppercase'>abc classes</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 border-b border-gray-100 pb-2'>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <div className='space-y-0.5'>
                        <p className='uppercase'>abc classes</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 border-b border-gray-100 pb-2'>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <div className='space-y-0.5'>
                        <p className='uppercase'>abc classes</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-2 border-b border-gray-100 pb-2'>
                    <div>
                        <img src={active} alt="" />
                    </div>
                    <div className='space-y-0.5'>
                        <p className='uppercase'>abc classes</p>
                        <p>email@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActiveInstitutions;