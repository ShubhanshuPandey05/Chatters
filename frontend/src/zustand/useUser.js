import {create} from 'zustand';

const useUser = create((set)=>({
    selectedUser:null,
    setSelectedUser: (selectedUser) => set({selectedUser}),
    messages:[],
    setMessages:(messages) => set({messages})
}))

export default useUser;