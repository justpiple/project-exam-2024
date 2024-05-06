"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFood = exports.deleteFoodById = exports.updateFoodById = exports.findFood = exports.findAllFood = void 0;
var prisma_1 = __importDefault(require("@/lib/prisma"));
var findAllFood = function (where) {
    return prisma_1.default.food.findMany({ where: where });
};
exports.findAllFood = findAllFood;
var findFood = function (where) {
    return prisma_1.default.food.findFirst({ where: where });
};
exports.findFood = findFood;
var updateFoodById = function (user_id, data) {
    return prisma_1.default.food.update({ where: { id: user_id }, data: data });
};
exports.updateFoodById = updateFoodById;
var deleteFoodById = function (user_id) {
    return prisma_1.default.food.delete({ where: { id: user_id } });
};
exports.deleteFoodById = deleteFoodById;
var createFood = function (data) {
    return prisma_1.default.food.create({ data: data });
};
exports.createFood = createFood;
//# sourceMappingURL=food.queries.js.map