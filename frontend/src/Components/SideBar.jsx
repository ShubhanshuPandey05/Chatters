import React, { useState } from 'react';
import SearchUser from './SearchUser';
import AllUsers from './AllUsers';
import ChattedUsers from './ChattedUsers';
import useUser from '../zustand/useUser';

export default function SideBar() {
    const [hidden, setHidden] = useState(true);
    const {selectedUser, setSelectedUser} = useUser();

    const handleClick1 = () => setHidden(true);
    const handleClick2 = () => setHidden(false);
    // console.log(User);
    return (
        <div className={`w-[95%] lg:w-[20%] h-[80%] backdrop-filter backdrop-blur-lg bg-[#a851ea65] rounded-2xl mx-2 overflow-hidden ${selectedUser ? "hidden lg:block" : ""}`}>
            <div className="w-full h-full">
                <SearchUser />
                <div className='w-full h-full flex justify-between'>
                    <div className='w-[16%] bg-[#a851ea65]items-center bg-[#7321b365]'>
                        <button onClick={handleClick1} className='mx-auto  text-3xl mt-3 mb-7'>📖<br /><span className={`text-white text-sm ${hidden ? "underline font-bold" : ""}`}>Chat</span></button><br/>
                        <button onClick={handleClick2} className='mx-auto text-3xl'>🧑<br /><span className={`text-white text-sm ${hidden ? "" : "underline font-bold"}`}>Users</span></button>
                    </div>
                    <div className='w-[100%]'>
                        <AllUsers hidden={hidden} />
                        <ChattedUsers hidden={hidden} />
                    </div>
                </div>
            </div>
        </div>
    )
}
