import React from 'react'
import MessagesContainer from './messages/MessagesContainer'

export default function Conversations() {
    return (
        <div className='w-[65%] h-[80%] backdrop-blur-xl bg-[#a851ea65] rounded-2xl mx-2 relative overflow-hidden'>
            <MessagesContainer/>
            
        </div>
    )
}
