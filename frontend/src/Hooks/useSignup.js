import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/authContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const {setIsAuthenticated} = useAuthContext();

    const signUp = async ({ fullName, userName, password, confirmPassword, gender }) => {
        const success = handleErrorInputs(fullName, userName, password, confirmPassword, gender);

        if (!success) return; 

        setLoading(true);

        try {
            const res = await fetch("/api/auth/signUp",{
                method :"POST",
                body :  JSON.stringify({ fullName, userName, password, confirmPassword, gender }),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);

            localStorage.setItem('authUser', JSON.stringify(data));

            setIsAuthenticated(data);
        } catch (error) {
            toast.error("An error occurred while signing up");
        } finally {
            setLoading(false)
        }
    }

    return { loading, signUp };
}

export default useSignup;


function handleErrorInputs(fullName, userName, password, confirmPassword, gender) {
    if (!fullName || !userName || !password || !confirmPassword || !gender) {
        toast.error('Please fill all fields');
        return false;
    } else if (password !== confirmPassword) {
        toast.error('Passwords do not match');
        return false;
    }else if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false;
    }
    return true;
}
