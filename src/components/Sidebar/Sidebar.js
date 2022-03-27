import React from 'react';
import { IoLogOut } from 'react-icons/io5';
import { MdDashboard } from 'react-icons/md';
import user from '../../util/assets/images/user.png';

const Sidebar = () => {
    return (
        <div className='h-screen sticky top-0 left-0 bg-white'>
            <div className='px-[30px]'>
                <h2 className='uppercase text-2xl'>ostello</h2>
            </div>
            <div className='h-[90%]'>
                <div className="group">
                    <div className="flex items-center gap-x-3 py-1 group-hover:bg-red-400">
                        <div className="flex items-center gap-x-3 py-1 px-[30px]">
                            <MdDashboard className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
                            <p>Overview</p>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center gap-x-3 py-1 group-hover:bg-red-400">
                        <div className="flex items-center gap-x-3 py-1 px-[30px]">
                            <MdDashboard className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
                            <p>Overview</p>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center gap-x-3 py-1 group-hover:bg-red-400">
                        <div className="flex items-center gap-x-3 py-1 px-[30px]">
                            <MdDashboard className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
                            <p>Overview</p>
                        </div>
                    </div>
                </div>
                <div className="group">
                    <div className="flex items-center gap-x-3 py-1 group-hover:bg-red-400">
                        <div className="flex items-center gap-x-3 py-1 px-[30px]">
                            <MdDashboard className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
                            <p>Overview</p>
                        </div>
                    </div>
                </div>

                <div className="group">
                    <div className="flex items-center gap-x-3 py-1 group-hover:bg-red-400">
                        <div className="flex items-center gap-x-3 py-1 px-[30px]">
                            <MdDashboard className="w-[18px] transition duration-700 group-hover:scale-125 h-[20px]" />
                            <p>Notification</p>
                            <span className="text-[10px] bg-red-600 px-[8px] py-[1px] rounded-full">
                                49
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex w-full items-center gap-x-1.5 px-[30px]'>
                <div className='bg-pink-300 rounded-xl'>
                    <img src={user} alt="" />
                </div>
                <div>
                    <p className='text-[12px] capitalize'>easin arafat</p>
                    <p className='text-[10px] uppercase text-gray-400'>xyz classes</p>
                </div>
                <div>
                    <IoLogOut className='text-2xl text-gray-400' />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;