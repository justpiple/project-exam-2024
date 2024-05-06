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
import fileUpload, { UploadedFile } from "express-fileupload";
import {
  postCreateOrder,
  getOrders,
} from "@/controllers/auth/order.controllers";

const router = Router();

// MAIN ROUTER
router.use(auth());
router.post("/", postCreateOrder);
router.get("/", getOrders);
export default router;
