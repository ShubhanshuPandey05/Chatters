import React from 'react'
import Users from './Users';
import usechattedConversation from '../Hooks/usechattedConversation';

export default function ChattedUsers({ hidden }) {
    const { loading, User } = usechattedConversation();
    return (

        <div className={`m-1 overflow-y-auto h-[80%] custom-scrollbar ${hidden ?  "" : "hidden"}`}>
            {loading ?? <div className="flex items-center justify-center w-full h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-200"></div>
            </div>}
            {User.map((user, Idx) => (
                <Users key={user._id} conversation={user}
                    lastIdx={Idx === User.length - 1} />
            ))}
        </div>

    )
}