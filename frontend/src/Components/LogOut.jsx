import React from 'react'
import { useAuthContext } from '../Context/authContext';
import useLogOut from '../Hooks/useLogOut';

export default function LogOut() {
    // const {setIsAuthenticated}= useAuthContext();
    const {logOut} = useLogOut();

    function logout(){
        // localStorage.removeItem("authUser");
        // setIsAuthenticated(null);
        logOut();
    }
  return (
    <button className='bg-[#6e18d5] px-7 py-3 rounded-lg absolute right-0 mx-32 mt-8 text-white' onClick={logout}>
        LogOut
    </button>
  )
}
