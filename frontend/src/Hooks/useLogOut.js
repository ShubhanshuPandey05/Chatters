import React, { useState } from 'react'
import { useAuthContext } from '../Context/authContext'
import toast from 'react-hot-toast';

const useLogOut = () => {
    const [loading, setLoading] = useState(false)
    const { setIsAuthenticated } = useAuthContext();

    const logOut = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!res) {
                toast.error("Error Logging Out");
                return;
            }
            const data = res.json()
            localStorage.removeItem("authUser");
            setIsAuthenticated(null);
            console.log(data);

        } catch (error) {
            toast.error("Error");
        } finally {
            setLoading(false);
        }
    }
    return { logOut, loading };
}

export default useLogOut