"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("@/middleware/auth");
var express_1 = require("express");
var express_fileupload_1 = __importDefault(require("express-fileupload"));
var food_controllers_1 = require("@/controllers/food.controllers");
var router = (0, express_1.Router)();
var file = (0, express_fileupload_1.default)({
    useTempFiles: false,
    tempFileDir: "bulk_temp_file/",
    limits: { fileSize: 10 * 1024 * 1024 },
});
// MAIN ROUTER
router.get("/:search", food_controllers_1.getFoods);
router.use((0, auth_1.auth)());
router.post("/", file, food_controllers_1.postCreateFood);
router.put("/:id", file, food_controllers_1.updateFood);
router.delete("/:id", food_controllers_1.deleteFood);
exports.default = router;
//# sourceMappingURL=food.js.map