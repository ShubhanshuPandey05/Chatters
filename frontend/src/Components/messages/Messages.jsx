import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useMessages from '../../Hooks/useMessages'
import useUser from '../../zustand/useUser';
import useGetMessage from '../../Hooks/useGetMessage';

export default function Messages() {

  const lastRef = useRef();

  useGetMessage(); // Get the latest message when the component mounts

  const { messages, loading } = useMessages();

  useEffect(() => {
    setTimeout(() => {
      lastRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100)
  })
  return (
    <div className='w-full h-[75%] overflow-y-auto custom-scrollbar'>
      {loading ? <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"><div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-200"></div></div> : messages.map((message) => (
        <div
          ref={lastRef}
          key={message._id}
        >
          <Message message={message.message} chat={message.senderId} />
        </div>
      ))}
      {!loading && messages.length === 0 && (
        <p className='text-center text-white'>Send a message to start a conversation</p>
      )}
    </div>
  )
}
