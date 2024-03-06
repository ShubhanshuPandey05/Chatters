import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useUser from '../zustand/useUser';
import useConversation from '../Hooks/useConversation';

export default function SearchUser() {
    const  [search, setSearch] = useState('');
    const {setSelectedUser} = useUser();
    const {User} = useConversation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            toast.error("Please enter at least 3 characters");
            return;
        }
        const searchedUser = await User.find((c) =>  c.userName.toLowerCase().includes(search.toLowerCase()));
        if(!searchedUser){
            toast.error(`No user found with the name "${search}"`);
        }else{
            setSelectedUser(searchedUser);
            setSearch('')
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-[70%] px-4 py-2 m-4 border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <button className='bg-purple-500 text-white  rounded-full p-2 items-center justify-center hover:bg-purple-600 focus:outline-none'>
                🔍
            </button>
        </form>
    )
}
