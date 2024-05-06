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
exports.updateFood = exports.postCreateFood = exports.deleteFood = exports.getFoods = void 0;
var food_queries_1 = require("@/utils/queries/food.queries");
var apiResponse_1 = require("@/utils/apiResponse");
var fs_1 = require("fs");
var getFoods = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_1;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, food_queries_1.findAllFood)({
                        name: { contains: ((_b = (_a = req.params) === null || _a === void 0 ? void 0 : _a.search) === null || _b === void 0 ? void 0 : _b.toLowerCase()) || undefined },
                    })];
            case 1:
                data = _c.sent();
                res.json((0, apiResponse_1.Success)("Food has retrieved", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_1 = _c.sent();
                console.log(error_1);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getFoods = getFoods;
// export const getUser = async (req: Request, res: Response) => {
//   try {
//     const data = await findUser({ id: req.params.id });
//     if (!data) {
//       return res.status(404).json(NotFound("Data not found"));
//     }
//     res.json(Success("Success load data", { data }));
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(InternalServerError("Internal server error"));
//   }
// };
var deleteFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var data, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, food_queries_1.deleteFoodById)(parseInt(req.params.id))];
            case 1:
                data = _a.sent();
                res.json((0, apiResponse_1.Success)("Food has deleted", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.log(error_2);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteFood = deleteFood;
var postCreateFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var image, fileName, food, data, error_3;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
                fileName = Date.now() + "_" + image.name;
                (0, fs_1.writeFileSync)("./public/uploaded/" + fileName, image.data);
                food = {
                    name: req.body.name,
                    spicy_level: req.body.spicy_level,
                    price: parseFloat(req.body.price),
                    image: fileName,
                };
                return [4 /*yield*/, (0, food_queries_1.createFood)(food)];
            case 1:
                data = _b.sent();
                res.status(201).json((0, apiResponse_1.Success)("Food has created", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.log(error_3);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.postCreateFood = postCreateFood;
var updateFood = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var image, fileName, food, data, error_4;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                image = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
                fileName = undefined;
                if (image) {
                    fileName = Date.now() + "_" + image.name;
                    (0, fs_1.writeFileSync)("./public/uploaded/" + fileName, image.data);
                }
                food = {
                    name: req.body.name,
                    spicy_level: req.body.spicy_level,
                    price: parseFloat(req.body.price),
                    image: fileName,
                };
                return [4 /*yield*/, (0, food_queries_1.updateFoodById)(parseInt(req.params.id), food)];
            case 1:
                data = _b.sent();
                res.status(201).json((0, apiResponse_1.CreatedSuccessfully)("Food has created", { data: data }));
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                console.log(error_4);
                return [2 /*return*/, res.status(500).json((0, apiResponse_1.InternalServerError)("Internal server error"))];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateFood = updateFood;
// export const updateUser = async (req: Request, res: Response) => {
//   try {
//     const user = {
//       email: req.body.email,
//       name: req.body.name,
//       password: encrypt(req.body.password),
//     };
//     const data = await updateUserById(req.params.id, user);
//     res.status(201).json(Success("Success update data"));
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(InternalServerError("Internal server error"));
//   }
// };
//# sourceMappingURL=food.controllers.js.map