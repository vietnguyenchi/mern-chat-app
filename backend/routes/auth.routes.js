import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { loginValidation, registerValidation } from "../validations/auth.validation.js";
import validRequestBody from "../middlewares/validRequestBody.js";

const router = express.Router();

router.post("/signup", validRequestBody(registerValidation), signup);

router.post("/login", validRequestBody(loginValidation), login);

router.post("/logout", logout);

export default router;