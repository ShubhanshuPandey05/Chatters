import User from "../models/userModel.js";
import Conversation from "../models/conversationModal.js";
export const getChattedUsers = async (req,res) => {
    try {

        const loggedInUserId = req.user._id;

        const conversations = await Conversation.find({ participants: loggedInUserId }).select("participants");

        // Extract participant IDs from conversations
        const participantIds = conversations.flatMap(conversation => conversation.participants);

        // Fetch user objects corresponding to the participant IDs
        const chattedUsers = await User.find({ _id: { $in: participantIds, $ne: loggedInUserId}}).select("-password");
        
       // console.log(fillteredusers);
        res.status(200).json(chattedUsers);

    } catch (error) {
        console.log(error.message,"error in fetching the Users");
        res.status(500).json({error:"Internal server error"});
    }
}