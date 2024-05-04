"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = exports.BadRequest = exports.Unauthorize = exports.Forbidden = exports.InternalServerError = exports.CreatedSuccessfully = exports.Success = void 0;
function Success(message, otherResponses) {
    return __assign({ message: message, status: 200, success: true }, otherResponses);
}
exports.Success = Success;
function CreatedSuccessfully(message, otherResponses) {
    return __assign({ status: 201, message: message, success: true }, otherResponses);
}
exports.CreatedSuccessfully = CreatedSuccessfully;
function InternalServerError(message) {
    return {
        message: message || "Internal server error",
        status: 500,
        success: false,
    };
}
exports.InternalServerError = InternalServerError;
function Forbidden(message) {
    return { message: message, status: 403, success: false };
}
exports.Forbidden = Forbidden;
function Unauthorize(message) {
    return { message: message, status: 401, success: false };
}
exports.Unauthorize = Unauthorize;
function BadRequest(message) {
    return { message: message, status: 400, success: false };
}
exports.BadRequest = BadRequest;
function NotFound(message) {
    return { message: message, status: 404, success: false };
}
exports.NotFound = NotFound;
//# sourceMappingURL=apiResponse.js.map