import { Router } from "express";
import { auth } from "@/middleware/auth";
import {
  deleteUser,
  getUser,
  getUsers,
  postCreateUser,
  updateUser,
} from "@/controllers/auth/user.controllers";
import { createUser } from "@/utils/queries/user.queries";
import { check } from "express-validator";
import { validateError } from "@/middleware/validateError";

const router = Router();

var createUserValidate = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").notEmpty(),
  check("name", "Password is required").notEmpty(),
  validateError,
];

router.use(auth("ADMIN"));
router.get("/", getUsers);
router.post("/", createUserValidate, postCreateUser);
router.get("/:id", getUser);
router.patch("/:id", createUserValidate, updateUser);
router.delete("/:id", deleteUser);

export default router;
