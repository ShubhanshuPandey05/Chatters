import React, { useEffect, useState } from 'react'
import useUser from '../zustand/useUser';
import toast from 'react-hot-toast';
import { set } from 'mongoose';

const useMessages = () => {
    const { messages, setMessages, selectedUser } = useUser();
    const [loading, setLoading] = useState(false)
    
    useEffect(()=>{
        const getMessage = async () => {
            try {
                setLoading(true)
    
                const res = await fetch(`/api/message/${selectedUser._id}`);
                const data = await res.json();
                if (!res.ok) {
                    throw new Error(data.error)
                }
                setMessages(data)
    
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false)
            }
    
        }
        if (selectedUser?._id) {
            getMessage();
        }
    },[selectedUser?._id,setMessages])

    return { messages, loading };
}

    export default useMessages;