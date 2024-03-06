import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/authContext";
import useUser from '../zustand/useUser';

const useSendMessage = () => {
    const { messages, setMessages, selectedUser } = useUser();
    const sendMessage = async (msg) => {
        try {
            console.log(selectedUser._id)
            console.log(msg)
            const res = await fetch(`/api/message/send/${selectedUser._id}`,{
                method :"POST",
                body :  JSON.stringify(msg),
                headers:{
                    "Content-Type": "application/json"
                }
            })
            if (!res.ok) {
                toast.error("this error");
            }
            const data = await res.json();
            console.log(data)
            setMessages([...messages,data])
            return data;
        } catch (error) {
            toast.error("An error while messageing");
        }
    }

    return { sendMessage };
}

export default useSendMessage;
