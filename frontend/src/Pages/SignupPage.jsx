import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useSignup from '../Hooks/useSignup';

export default function SignupPage() {
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
    const password2 = () => {
        let inputPassword = document.getElementById('input-password2');
        let icon = document.getElementById("icon2");
        if (inputPassword.type === "password") {
            inputPassword.type = "text";
            icon.src = "./assets/eyeOpen.png";
        } else {
            inputPassword.type = "password";
            icon.src = "./assets/eyeClose.png";
        }
    };

    const [inputs, setInputs] = useState({
        fullName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, signUp } = useSignup();

    const handelSubmit = async (e) => {
        e.preventDefault();
        await signUp(inputs);
        // console.log(inputs);
    }
    return (
        <>
            <img src="./assets/Logo.png" alt="" className='absolute bottom-0 center w-80' />
            <div className='h-screen flex justify-center items-center'>
                <div className='w-fit h-fit backdrop-filter backdrop-blur-lg bg-[#a851ea65] pt-16 pb-28 px-20 rounded-3xl absolute center'>
                    <form onSubmit={handelSubmit} className={loading ? "opacity-[0.5]":""}>
                        <input type="text" className='p-2 mx-5 w-72 rounded-xl' placeholder='Full Name' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} /><br /><br />
                        <input type="text" className='p-2 mt-4 mx-5 mb-4 w-72 rounded-xl' placeholder='User Name' value={inputs.userName} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} /><br /><br />
                        <div className='relative mx-5 w-fit'>
                            <input type="password" className='p-2 w-72 rounded-xl' placeholder='Password' id='input-password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /><span><img src="./assets/eyeClose.png" alt="Show" className='w-5 absolute top-4 right-5 cursor-pointer' id='icon' onClick={password} /></span>
                        </div>
                        <div className='relative mt-10 mx-5 mb-2 w-fit'>
                            <input type="password" className='p-2 w-72 rounded-xl' placeholder='Confirm Password' id='input-password2' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /><span><img src="./assets/eyeClose.png" alt="Show" className='w-5 absolute top-4 right-5 cursor-pointer' id='icon2' onClick={password2} /></span>
                        </div>
                        <div className='my-5'>
                            <input type="radio" name='gender' value="male" className='ml-5' onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}/><span className='text-gray-200 text-xl'>Male</span>
                            <input type="radio" name='gender' value="female" className='ml-10' onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}/><span className='text-gray-200 text-xl'>Female</span>
                        </div>
                        <button className='py-5 px-10 center absolute bg-white w-fit rounded-2xl font-extrabold hover:bg-slate-200 mt-10' disabled={loading}>SignUp</button>
                        <Link to={"/login"} className='mx-6 text-sm hover:underline hover:text-blue-900'>Already have an account</Link>
                    </form>
                    {loading ? <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"></div></div> : ""}
                </div>
            </div>
        </>
    )
}

