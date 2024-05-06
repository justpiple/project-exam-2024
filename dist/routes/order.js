"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("@/middleware/auth");
var express_1 = require("express");
var order_controllers_1 = require("@/controllers/order.controllers");
var router = (0, express_1.Router)();
// MAIN ROUTER
router.use((0, auth_1.auth)());
router.post("/", order_controllers_1.postCreateOrder);
router.get("/", order_controllers_1.getOrders);
exports.default = router;
//# sourceMappingURL=order.js.map