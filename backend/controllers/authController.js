import bcrypt from "bcryptjs";
import User from "../models/userModel.js";
import genrateTokenAndSetCookies from "../utils/generateToken.js";


export const signUp = async (req, res) => {
    try {
        const { fullName, userName, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(401).json({ error: "Passwords do not match" });
        }
        let user = await User.findOne({ userName: userName });
        if (user) {
            return res.status(400).json({ error: 'User already exists' })
        }
        // Hashing Password here....
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // https://avatar-placeholder.iran.liara.run/       ..... this is profile api

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

        const newUser = new User({
            fullName,
            userName,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic
        })

        if (newUser) {
            genrateTokenAndSetCookies(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                userName: newUser.userName,
                gender: newUser.gender,
                profilePic: newUser.profilePic
            })
        } else {
            res.status(500).json({ error: 'Invalid userData' });
        }

    } catch (error) {
        console.log("Error in Signup", error);
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try {
        const  { userName, password } = req.body;
        const  user = await User.findOne({ userName })
        const isCorrectPassword = await bcrypt.compare(password, user.password || "");


        if (!user ||  !isCorrectPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        genrateTokenAndSetCookies(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            gender: user.gender,
            profilePic: user.profilePic
        })
    } catch (error) {
        console.log("Error in Login", error);
        res.status(500)
    }
}
export const logOut = (req, res) => {
    try {
        res.cookie("jwt","",{ maxAge : 0 });
        res.status(200).json({
            message:"Logout Successfully"
        })
    } catch (error) {
        console.log(error.message,"error in logout");
        res.status(500).json({error:"internal Server Error"});
    }
}