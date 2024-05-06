"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.deleteOrderById = exports.updateOrderById = exports.findOrder = exports.findAllOrder = void 0;
var prisma_1 = __importDefault(require("@/lib/prisma"));
var findAllOrder = function (where) {
    return prisma_1.default.order_list.findMany({
        where: where,
        include: {
            order_detail: { include: { food: { select: { name: true } } } },
        },
    });
};
exports.findAllOrder = findAllOrder;
var findOrder = function (where) {
    return prisma_1.default.order_list.findFirst({ where: where });
};
exports.findOrder = findOrder;
var updateOrderById = function (user_id, data) {
    return prisma_1.default.order_list.update({ where: { id: user_id }, data: data });
};
exports.updateOrderById = updateOrderById;
var deleteOrderById = function (user_id) {
    return prisma_1.default.order_list.delete({ where: { id: user_id } });
};
exports.deleteOrderById = deleteOrderById;
var createOrder = function (data) {
    return prisma_1.default.order_list.create({ data: data });
};
exports.createOrder = createOrder;
//# sourceMappingURL=order.queries.js.map