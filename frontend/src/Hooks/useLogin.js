import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/authContext";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setIsAuthenticated} = useAuthContext();

    const login = async ({ userName, password}) => {
        const success = handleErrorInputs(userName, password);

        if (!success) return; 

        setLoading(true);

        try {
            const res = await fetch("/api/auth/login",{
                method :"POST",
                body :  JSON.stringify({ userName, password}),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            console.log(data);

            if(!res.ok){
                toast.error(data.error);
            }else{
                localStorage.setItem('authUser', JSON.stringify(data));
                setIsAuthenticated(data);
            }


        } catch (error) {
            toast.error("An error occurred while signing up");
        } finally {
            setLoading(false)
        }
    }

    return { loading, login };
}

export default useLogin;


function handleErrorInputs(userName, password) {
    if (!userName || !password) {
        toast.error('Please fill all fields');
        return false;
    }
    return true;
}
