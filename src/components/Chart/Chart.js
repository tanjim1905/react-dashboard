import React from 'react';
import ActiveInstitutions from '../ActiveInstitutions/ActiveInstitutions';
import StudentRegistering from '../StudentRegistering/StudentRegistering';

const Chart = () => {
    return (
        <div className='flex gap-x-6'>
            <div className='w-8/12'>
                <StudentRegistering />
            </div>
            <div className='w-4/12'>
                <ActiveInstitutions />
            </div>
        </div>
    );
};

export default Chart;