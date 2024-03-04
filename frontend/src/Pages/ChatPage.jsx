import React from 'react'
import LogOut from '../Components/LogOut'
import SideBar from '../Components/SideBar'
import Conversations from '../Components/Conversations'

export default function ChatPage() {


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
