import { verifyToken } from "../Utils/jwt.js";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
   try {

      const token = req.cookies.jwt;

      if (!token) return res.status(401).json({ message: "Unauthorized - No token provided" });

      const decoded = verifyToken(token);

      if (!decoded) return res.status(401).json({ message: "Unauthorized - Invalid token" });

      const user = await User.findById(decoded.userId).select("-password");

      if (!user) return res.status(404).json({ message: "User not found" });

      req.user = user;

      next();

   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

export default protectRoute;