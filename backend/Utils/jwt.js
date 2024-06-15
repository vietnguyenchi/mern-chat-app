import jwt from 'jsonwebtoken';
import { JWT_SECRET, NODE_ENV } from './env.js';

export const verifyToken = (token) => {
   return jwt.verify(token, JWT_SECRET);
}

export const generateToken = (payload, expiresIn = "15d", res) => {
   const token = jwt.sign(payload, JWT_SECRET, { expiresIn });

   res.cookie("jwt", token, {
      maxAge: 1000 * 60 * 60 * 24 * 15, // 30 days
      httpOnly: true, // The cookie only accessible by the web server, prevents XSS attacks
      sameSite: "strict", // The cookie is not sent with cross-origin requests, provides some CSRF protection
      secure: NODE_ENV === "production" // The cookie is only sent over HTTPS
   });
}