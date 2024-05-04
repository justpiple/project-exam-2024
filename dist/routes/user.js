"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("@/middleware/auth");
var user_controllers_1 = require("@/controllers/auth/user.controllers");
var express_validator_1 = require("express-validator");
var validateError_1 = require("@/middleware/validateError");
var router = (0, express_1.Router)();
var createUserValidate = [
    (0, express_validator_1.check)("email", "Email is required").isEmail(),
    (0, express_validator_1.check)("password", "Password is required").notEmpty(),
    (0, express_validator_1.check)("name", "Password is required").notEmpty(),
    validateError_1.validateError,
];
router.use((0, auth_1.auth)("ADMIN"));
router.get("/", user_controllers_1.getUsers);
router.post("/", createUserValidate, user_controllers_1.postCreateUser);
router.get("/:id", user_controllers_1.getUser);
router.patch("/:id", createUserValidate, user_controllers_1.updateUser);
router.delete("/:id", user_controllers_1.deleteUser);
exports.default = router;
//# sourceMappingURL=user.js.map