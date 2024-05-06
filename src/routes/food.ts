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
  deleteFood,
  getFoods,
  postCreateFood,
  updateFood,
} from "@/controllers/auth/food.controllers";

const router = Router();

const file = fileUpload({
  useTempFiles: false,
  tempFileDir: "bulk_temp_file/",
  limits: { fileSize: 10 * 1024 * 1024 },
});

// MAIN ROUTER
router.get("/:search", getFoods);

router.use(auth());
router.post("/", file, postCreateFood);
router.put("/:id", file, updateFood);
router.delete("/:id", deleteFood);

export default router;
