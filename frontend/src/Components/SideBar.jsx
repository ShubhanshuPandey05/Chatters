import React, { useEffect } from 'react'
import useConversation from '../Hooks/useConversation'
import Users from './Users';
import SearchUser from './SearchUser';

export default function SideBar() {
    const { loading, User } = useConversation();
    // console.log(User);
    return (
        <div className='w-[20%] h-[80%] backdrop-filter backdrop-blur-lg bg-[#a851ea65] rounded-2xl mx-2 overflow-hidden '>
            <div className="w-full h-full">
                <SearchUser/>
                <div className='m-4 overflow-y-auto h-[80%] custom-scrollbar'>
                    {loading ?? <div className="flex items-center justify-center w-full h-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
                    </div>}
                    {User.map((user, Idx) => (
                        <Users key={user._id} conversation={user}
                            lastIdx={Idx === User.length - 1} />
                    ))}
                </div>
            </div>
        </div>
    )
}
