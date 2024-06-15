import Joi from "joi";

export const registerValidation = Joi.object({
   fullName: Joi.string().min(3).max(30).required().messages({
      "string.base": "Full name must be a string",
      "string.empty": "Full name is required",
      "string.min": "Full name should have a minimum length of {#limit}",
      "string.max": "Full name should have a maximum length of {#limit}",
      "any.required": "Full name is required"
   }),
   username: Joi.string().min(3).max(30).required().messages({
      "string.base": "Username must be a string",
      "string.empty": "Username is required",
      "string.min": "Username should have a minimum length of {#limit}",
      "string.max": "Username should have a maximum length of {#limit}",
      "any.required": "Username is required"
   }),
   password: Joi.string().min(6).max(12).required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password is required",
      "string.min": "Password should have a minimum length of {#limit}",
      "string.max": "Password should have a maximum length of {#limit}",
      "any.required": "Password is required"
   }),
   confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
      "any.only": "Passwords do not match",
      "any.required": "Confirm password is required"
   }),
   gender: Joi.string().valid('male', 'female', 'other'),
   profilePic: Joi.string().uri().messages({
      "string.uri": "Avatar must be a valid URL",
   }),
});

export const loginValidation = Joi.object({
   username: Joi.string().min(3).max(30).required().messages({
      "string.base": "Username must be a string",
      "string.empty": "Username is required",
      "string.min": "Username should have a minimum length of {#limit}",
      "string.max": "Username should have a maximum length of {#limit}",
      "any.required": "Username is required"
   }),
   password: Joi.string().min(6).max(12).required().messages({
      "string.base": "Password must be a string",
      "string.empty": "Password is required",
      "string.min": "Password should have a minimum length of {#limit}",
      "string.max": "Password should have a maximum length of {#limit}",
      "any.required": "Password is required"
   }),
});