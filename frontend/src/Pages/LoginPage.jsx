import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../Hooks/useLogin';

export default function LoginPage() {
    const password = () => {
        let inputPassword = document.getElementById('input-password');
        let icon = document.getElementById("icon");
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            icon.src = "./assets/eyeOpen.png";
        } else {
            inputPassword.type = "password";
            icon.src = "./assets/eyeClose.png";
        }
    };
    const [inputs, setInputs] = useState({
        userName: "",
        password: ""
    })

    const { loading, login } = useLogin();

    const handelSubmit = async (e) => {
        e.preventDefault();
        await login(inputs);
        // console.log(inputs);
    }
    return (
        <>
            <img src="./assets/Logo.png" alt="" className='absolute bottom-0 center w-80' />
            <div className='h-screen flex justify-center items-center'>
                <div className='w-fit h-fit backdrop-filter backdrop-blur-lg bg-[#a851ea65] pt-20 pb-32 px-20 rounded-3xl '>
                    <form onSubmit={handelSubmit} className={loading ? "opacity-[0.5]":""}>
                        <input type="text" className='p-3 mx-5 w-64 rounded-xl' placeholder='User Name' value={inputs.userName} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} /><br /><br />
                        <div className='relative m-5 w-fit'>
                            <input type="password" className='p-3 w-64 rounded-xl' placeholder='Password' id='input-password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /><span><img src="./assets/eyeClose.png" alt="Show" className='w-5 absolute top-5 right-5 cursor-pointer' id='icon' onClick={password} /></span>
                        </div>
                        <button className='py-5 px-10 center absolute bg-white w-fit rounded-2xl font-extrabold hover:bg-slate-200 mt-16'>Login</button>
                        <Link to={"/signup"} className='m-6 text-sm hover:underline hover:text-blue-900'>Don't have an account</Link>
                    </form>
                    {loading ? <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"></div></div> : ""}
                </div>
            </div>
        </>
    )
}
