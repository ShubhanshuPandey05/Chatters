import User from "../models/userModel.js";
export const getUserForSideBar = async (req,res) => {
    try {

        const loggedInUserId = req.user._id;

        let fillteredusers = await User.find({_id : {$ne: loggedInUserId}}).select("-password");
        // let allUsers = await User.find({}).select("-password");

        
        // res.status(201).json(allUsers);
        res.status(201).json(fillteredusers);

    } catch (error) {
        console.log(error.message,"error in fetching the Users");
        res.status(500).json({error:"Internal server error"});
    }
}