import React from 'react'
import useUser from '../../zustand/useUser'
import { useAuthContext } from '../../Context/authContext';
import { useSocketContext } from '../../Context/SocketContext';

export default function Message({ chat, message }) {
    const { selectedUser } = useUser();
    const {isAuthenticated} = useAuthContext(); 
    return (
        <>
            {chat == selectedUser._id ? (<div className="flex justify-start items-center relative my-2 mx-1">
                <div className="rounded-full mx-5">
                    <div className="w-10 rounded-full">
                        <img src={selectedUser.profilePic} alt="" />
                    </div>
                </div>
                <div>
                    <div className="tail-left bg-gray-200 rounded-lg relative p-3">
                        {message}
                    </div>
                    <p className='text-[0.8rem] text-gray-300'>08:45</p>
                </div>
            </div>) : (<div className="flex justify-end items-center relative my-2 mx-1">
                <div>
                    <div className="tail-right bg-blue-500 text-white rounded-lg relative p-3 w-fit">
                        {message}
                    </div>
                    <p className='text-[0.8rem] text-gray-300 text-right'>08:45</p>
                </div>
                <div className="rounded-full mx-5">
                    <div className="w-10 rounded-full">
                        <img src={isAuthenticated.profilePic} alt="" />
                    </div>
                </div>
            </div>)}
        </>

    )
}
