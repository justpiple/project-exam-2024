"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.postCreateUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
var encryption_1 = require("@/utils/encryption");
var user_queries_1 = require("@/utils/queries/user.queries");
var apiResponse_1 = require("@/utils/apiResponse");
var getUsers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, user_queries_1.findAllUser)()];
            case 1:
                data = _a.sent();
                res.json((0, apiResponse_1.Success)("Success load data", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUsers = getUsers;
var getUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, user_queries_1.findUser)({ id: req.params.id })];
            case 1:
                data = _a.sent();
                if (!data) {
                    return [2 /*return*/, res.status(404).json((0, apiResponse_1.NotFound)("Data not found"))];
                }
                res.json((0, apiResponse_1.Success)("Success load data", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUser = getUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, user_queries_1.deleteUserById)(req.params.id)];
            case 1:
                data = _a.sent();
                res.json((0, apiResponse_1.Success)("Success delete data"));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteUser = deleteUser;
var postCreateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, data, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = {
                    email: req.body.email,
                    name: req.body.name,
                    password: (0, encryption_1.encrypt)(req.body.password),
                };
                return [4 /*yield*/, (0, user_queries_1.createUser)(user)];
            case 1:
                data = _a.sent();
                res.status(201).json((0, apiResponse_1.CreatedSuccessfully)("Success create data"));
                return [3 /*break*/, 3];
            case 2:
                error_4 = _a.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postCreateUser = postCreateUser;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, data, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = {
                    email: req.body.email,
                    name: req.body.name,
                    password: (0, encryption_1.encrypt)(req.body.password),
                };
                return [4 /*yield*/, (0, user_queries_1.updateUserById)(req.params.id, user)];
            case 1:
                data = _a.sent();
                res.status(201).json((0, apiResponse_1.Success)("Success update data"));
                return [3 /*break*/, 3];
            case 2:
                error_5 = _a.sent();
                console.log(error_5);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateUser = updateUser;
//# sourceMappingURL=user.controllers.js.map