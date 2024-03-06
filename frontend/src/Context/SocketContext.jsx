import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./authContext";
import io from  'socket.io-client';
import Users from "../Components/Users";

const SocketContext = createContext();
export const useSocketContext = () =>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({children}) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser,setOnlineUser] = useState([]);
    const {isAuthenticated} = useAuthContext();
    
    // Connect to the server.
    useEffect(()=>{
        if (isAuthenticated) {
            const socket = io("https://chatters-svk4.onrender.com",{
                query:{
                    userId :  isAuthenticated._id
                }
            })
            setSocket(socket)

            socket.on("getOnlineUser", (user) => {
                setOnlineUser(user);
            })

            return () => socket.close()
        }else{
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
        
    } , [isAuthenticated]);
    return(
        <SocketContext.Provider value={{socket,onlineUser}}>
            {children}
        </SocketContext.Provider>
    )
}
