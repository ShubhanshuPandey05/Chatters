import { useSocketContext } from "../Context/SocketContext";
import useUser from "../zustand/useUser";

const Users = ({ conversation, lastIdx }) => {
    const { selectedUser, setSelectedUser } = useUser();

    const isSelected = selectedUser?._id === conversation._id;

    
    const {onlineUser} = useSocketContext();
    const isOnline = onlineUser.includes(conversation._id)
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded-xl p-2 py-3 cursor-pointer
             ${isSelected ? "bg-sky-500" : ""}`}
              onClick={()=> setSelectedUser(conversation)}
              >
                <div className={`rounded-full ${isOnline ?"  bg-green-500": ""} p-[3px]`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} alt="user avatar" />
                    </div>
                </div>

                <div className=" flex flex-col flex-1">
                    <div className="gap-3">
                        <p className="font-bold text-gray-200">{conversation.userName}</p>
                        <p className=" text-sm text-gray-200">{conversation.fullName}</p>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className="border-t my-0 py-0 h-1 w-[90%] m-auto border-purple-500" />}
        </>
    );
};

export default Users;
