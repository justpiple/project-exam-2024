"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var apiResponse_1 = require("@/utils/apiResponse");
var auth = function () {
    var akses = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        akses[_i] = arguments[_i];
    }
    return function (req, res, next) {
        var _a;
        try {
            var token = req.cookies.token || ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split("Bearer ")[1]);
            if (!token) {
                return res.status(401).json((0, apiResponse_1.Unauthorize)("Unauthorized"));
            }
            var JWTSecret = process.env.JWT_SECRET;
            var decoded = jsonwebtoken_1.default.verify(token, JWTSecret);
            if (!akses.includes(decoded.role) && !akses.includes("ALL")) {
                return res.status(401).json((0, apiResponse_1.Unauthorize)("Unauthorized"));
            }
            req.token = decoded;
            next();
        }
        catch (_b) {
            return res.status(401).json((0, apiResponse_1.Unauthorize)("Unauthorized"));
        }
    };
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map