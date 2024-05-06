import { auth } from "@/middleware/auth";
import { Router } from "express";
import { postCreateOrder, getOrders } from "@/controllers/order.controllers";

const router = Router();

// MAIN ROUTER
router.use(auth());
router.post("/", postCreateOrder);
router.get("/", getOrders);
export default router;
