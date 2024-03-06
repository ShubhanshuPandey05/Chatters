import React from 'react'
import useUser from '../../zustand/useUser'
import { useAuthContext } from '../../Context/authContext';
import { useSocketContext } from '../../Context/SocketContext';

export default function Message({ chat, message, time }) {
    const { selectedUser } = useUser();
    const {isAuthenticated} = useAuthContext(); 

    function convertTime(inputTime) {
        // Create a new Date object from the input time string
        const date = new Date(inputTime);
        
        // Extract the hours, minutes, and seconds from the Date object
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        
        // Concatenate the hours, minutes, and seconds with colons to form the output time string
        const outputTime = hours + ':' + minutes + ':' + seconds;
        
        return outputTime;
    }
    return (
        <>
            {chat == selectedUser._id ? (<div className="flex justify-start items-center relative my-2 mx-1">
                <div className="rounded-full mx-2 lg:mx-5">
                    <div className="w-10 rounded-full">
                        <img src={selectedUser.profilePic} alt="" />
                    </div>
                </div>
                <div className='max-w-[70%]' style={{ wordWrap: 'break-word' }}>
                    <div className="tail-left bg-gray-200 rounded-lg relative p-2 lg:p-3 text-sm md:text-md">
                        {message}
                    </div>
                    <p className='text-[0.8rem] text-gray-300'>{convertTime(time)}</p>
                </div>
            </div>) : (<div className="flex justify-end items-center relative my-2 mx-1">
                <div className='max-w-[70%]' style={{ wordWrap: 'break-word' }}>
                    <div className="tail-right bg-blue-500 text-white rounded-lg relative p-2 lg:p-3 text-sm md:text-md" >
                        {message}
                    </div>
                    <p className='text-[0.8rem] text-gray-300 text-right'>{convertTime(time)}</p>
                </div>
                <div className="rounded-full mx-2 lg:mx-5">
                    <div className="w-10 rounded-full">
                        <img src={isAuthenticated.profilePic} alt="" />
                    </div>
                </div>
            </div>)}
        </>

    )
}
