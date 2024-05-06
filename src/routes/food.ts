import { auth } from "@/middleware/auth";
import { Router } from "express";
import fileUpload from "express-fileupload";
import {
  deleteFood,
  getFoods,
  postCreateFood,
  updateFood,
} from "@/controllers/food.controllers";

const router = Router();

const file = fileUpload({
  useTempFiles: false,
  tempFileDir: "bulk_temp_file/",
  limits: { fileSize: 10 * 1024 * 1024 },
});

// MAIN ROUTER
router.get("/:search", getFoods);
router.get("/", getFoods);

router.use(auth());
router.post("/", file, postCreateFood);
router.put("/:id", file, updateFood);
router.delete("/:id", deleteFood);

export default router;
