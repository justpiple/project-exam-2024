import {
  CurrentSession,
  Login,
  Logout,
} from "@/controllers/auth/auth.controller";
import { auth } from "@/middleware/auth";
import { validateError } from "@/middleware/validateError";
import { Router } from "express";
import { check } from "express-validator";

const router = Router();

// MAIN ROUTER
router.get("/logout", Logout);
router.get("/me", auth("ALL"), CurrentSession);

var loginValidate = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").notEmpty(),
  validateError,
];
router.post("/login", loginValidate, Login);

export default router;
