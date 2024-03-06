import React from 'react'
import LogOut from '../Components/LogOut'
import SideBar from '../Components/SideBar'
import Conversations from '../Components/Conversations'
import useUser from '../zustand/useUser'

export default function ChatPage() {
    const {selectedUser, setSelectedUser} = useUser();

    return (
        <>
        <LogOut/>
            <div className='h-screen w-screen flex p-5 justify-center items-center'>
                <SideBar/>
                <Conversations/>
            </div>
            <img src="./assets/Logo.png" alt="" className='absolute z-10 bottom-2 w-56 center'/>
        </>
    )
}
