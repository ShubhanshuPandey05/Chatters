import Conversation from '../models/conversationModal.js';
import Message from '../models/messageModel.js';
import { getReceiverSocketId, io } from '../socket/socket.js';
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id);
            
        }

        // await conversation.save();
        // await newMessage.save();

        const receiverSocketId = getReceiverSocketId(receiverId);
        
        if (receiverSocketId) {
            io.to(receiverSocketId).emit('newMessage',newMessage)
        }
        await Promise.all([conversation.save(),newMessage.save()]);


        res.status(201).json(newMessage);

    } catch (error) {
        console.log(error.message, 'Error in sending message');
        res.status(500).json({ error: "internal server error" })
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id : userToChatId} =req.params;
        const senderId = req.user._id;


        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages");

        if (!conversation) {
            return res.status(200).json([]);
        }

        const messages = conversation.messages;

        res.status(201).json(messages)
    } catch (error) {
        console.log(error.message, 'Error in getting message');
        res.status(500).json({ error: "internal server error" })
    }
}