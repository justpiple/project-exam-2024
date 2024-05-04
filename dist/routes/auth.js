"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controllers_1 = require("@/controllers/auth/auth.controllers");
var user_controllers_1 = require("@/controllers/auth/user.controllers");
var auth_1 = require("@/middleware/auth");
var validateError_1 = require("@/middleware/validateError");
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var router = (0, express_1.Router)();
// MAIN ROUTER
router.get("/logout", auth_controllers_1.Logout);
router.get("/me", (0, auth_1.auth)("ALL"), auth_controllers_1.CurrentSession);
var createUserValidate = [
    (0, express_validator_1.check)("email", "Email is required").isEmail(),
    (0, express_validator_1.check)("password", "Password is required").notEmpty(),
    (0, express_validator_1.check)("name", "Password is required").notEmpty(),
    validateError_1.validateError,
];
router.post("/register", createUserValidate, user_controllers_1.postCreateUser);
var loginValidate = [
    (0, express_validator_1.check)("email", "Email is required").isEmail(),
    (0, express_validator_1.check)("password", "Password is required").notEmpty(),
    validateError_1.validateError,
];
router.post("/login", loginValidate, auth_controllers_1.Login);
exports.default = router;
//# sourceMappingURL=auth.js.map