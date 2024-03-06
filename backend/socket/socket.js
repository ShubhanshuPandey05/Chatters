import http from 'http';
import { Server } from "socket.io";
import express from "express";

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "https://chatters-svk4.onrender.com",
        methods: ["GET", "POST", "DELETE"]
    },
})


export const getReceiverSocketId = (recieverId) =>{
    return userSocketMap[recieverId];
}

const userSocketMap = {}


io.on('connection', (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId != "undefined") {
        userSocketMap[userId] = [socket.id];
    }

    io.emit("getOnlineUser", Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUser", Object.keys(userSocketMap));

    })
})

export { app, io, server };
