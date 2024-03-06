import React, { useEffect } from 'react'
import useUser from '../zustand/useUser'
import { useSocketContext } from '../Context/SocketContext'
import messageRingtone from '../assets/notification.mp3'

const useGetMessage = () => {
    const { messages, setMessages } = useUser();
    const { socket } = useSocketContext();
    useEffect(() => {
        socket?.on('newMessage',(newMessage) => {
            const sound = new Audio(messageRingtone);
            sound.play();
            setMessages([...messages,newMessage]);
        })
        return () => socket?.off('newMessage');

    }, [socket,setMessages,messages])
}

export default useGetMessage