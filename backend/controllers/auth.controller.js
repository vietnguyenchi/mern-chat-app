import { comparePassword, hassPassword } from "../Utils/hassPassword.js";
import { generateToken } from "../Utils/jwt.js";
import User from "../models/user.model.js";

export const signup = async (req, res) => {
   try {
      const { fullName, username, password, gender } = req.body;

      const existUser = await User.findOne({ username });

      if (existUser) {
         return res.status(400).json({ message: "User already exists" });
      }

      const hashPassword = await hassPassword(password);

      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?name=${username}`;

      const girlProfilePic = `https://avatar.iran.liara.run/public/boy?name=${username}`;

      const newUser = new User({
         fullName,
         username,
         password: hashPassword,
         gender,
         profilePic: gender === "male" ? boyProfilePic : girlProfilePic
      })

      generateToken({ userId: newUser._id }, "15d", res);
      await newUser.save();

      newUser.password = undefined;
      res.status(201).json({ message: "User created successfully", user: newUser });

   } catch (error) { }
};

export const login = async (req, res) => {
   try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
         return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await comparePassword(password, user?.password || "");

      if (!isMatch) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

      generateToken({ userId: user._id }, "15d", res);

      res.status(200).json({
         message: "Login successfully", user: {
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic
         }
      });
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
   }
};

export const logout = async (req, res) => {
   try {
      res.cookie("jwt", "", { maxAge: 0 });
      res.status(200).json({ message: "Logout successfully" });
   } catch (error) {
      return res.status(500).json({ message: "Internal server error" });
   }
};
