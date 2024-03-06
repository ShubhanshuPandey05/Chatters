import React from 'react'
import MessagesContainer from './messages/MessagesContainer';
import useUser from '../zustand/useUser';

export default function Conversations() {
    const {selectedUser, setSelectedUser} = useUser();
    return (
        <div className={`w-[95%] lg:w-[65%] h-[80%] backdrop-blur-xl bg-[#a851ea65] rounded-2xl mx-2 relative overflow-hidden ${!selectedUser ? "hidden lg:block" : ""}`}>
            <MessagesContainer/>
            
        </div>
    )
}
