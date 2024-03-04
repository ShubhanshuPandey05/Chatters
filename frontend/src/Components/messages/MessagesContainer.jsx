import React, { useEffect, useState } from 'react'
import Messages from './Messages'
import useUser from '../../zustand/useUser'
import useSendMessage from '../../Hooks/useSendMessage';

export default function MessagesContainer() {
    const { selectedUser,setSelectedUser } = useUser();
    useEffect( () => {
        const cleanUp = () => {
            setSelectedUser(null)
        };
    },[])
    return (
        <>
            {
                selectedUser ? (
                    <><MessageHeader />
                        <Messages />
                        <InputMessages />
                        </>
                ) : ("")
            }
        </>
    )
}

const MessageHeader = () => {
    const { selectedUser } = useUser();

    return (
        <>
            <div className='flex bg-purple-500 p-2'>
                <button className='border-l w-10 rotate-180'>➜</button>
                <div className="rounded-full mx-5">
                    <div className="w-10 rounded-full">
                        <img src={selectedUser.profilePic} alt="" />
                    </div>
                </div>
                <p className="font-bold text-gray-200 my-auto">{selectedUser.userName}</p>
            </div>
        </>
    )
}

const InputMessages = () => {
    const [msg, setMessage] = useState({
        message : ""
    });

    const {sendMessage} = useSendMessage();

    const input = document.getElementById("msg")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(msg);
        sendMessage(msg);
        setMessage({ message: "" });
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" id='msg' className='w-[95%] h-14 rounded-2xl bg-White border border-black bottom-5 absolute p-5 center' autoComplete='off' name='message' value={msg.message} onChange={(e) => setMessage({...msg,message:e.target.value})} />
                <button type="submit" className='absolute bottom-7 w-fit h-fit rounded-full right-10'>
                    <img src="./assets/SendIcon.png" alt="" className='w-10 h-10' />
                </button>
            </form>
        </>
    )
}