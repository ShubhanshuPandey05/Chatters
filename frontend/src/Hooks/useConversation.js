import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useConversation = () => {
    const [loading, setLoading] = useState(false)
    const [User,setUser] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true);
        try {
            const res = await fetch("/api/user")
            const data = await res.json();
            console.log(data)
            if (!data) {
                throw new error(data.message || "Error Occurred");
            }
            setUser(data)

        } catch (error) {
            toast.error("Error");
        } finally {
            setLoading(false);
        }
        }
        getUsers();
    },[])
    return { User, loading };
}

export default useConversation;