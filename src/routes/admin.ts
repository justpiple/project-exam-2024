import {
  CurrentSession,
  Login,
  Logout,
} from "@/controllers/auth/auth.controllers";
import { postCreateUser } from "@/controllers/auth/user.controllers";
import { auth } from "@/middleware/auth";
import { validateError } from "@/middleware/validateError";
import { Router } from "express";
import { check } from "express-validator";

const router = Router();

// MAIN ROUTER
router.get("/logout", Logout);

var createUserValidate = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").notEmpty(),
  check("name", "Password is required").notEmpty(),
  validateError,
];
router.post("/register", createUserValidate, postCreateUser);

var loginValidate = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").notEmpty(),
  validateError,
];
router.post("/auth", loginValidate, Login);

export default router;
