"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdmin = exports.deleteAdminById = exports.updateAdminById = exports.findAdmin = exports.findAllAdmin = void 0;
var prisma_1 = __importDefault(require("@/lib/prisma"));
var findAllAdmin = function (where) {
    return prisma_1.default.admin.findMany({ where: where });
};
exports.findAllAdmin = findAllAdmin;
var findAdmin = function (where) {
    return prisma_1.default.admin.findFirst({ where: where });
};
exports.findAdmin = findAdmin;
var updateAdminById = function (user_id, data) {
    return prisma_1.default.admin.update({ where: { id: user_id }, data: data });
};
exports.updateAdminById = updateAdminById;
var deleteAdminById = function (user_id) {
    return prisma_1.default.admin.delete({ where: { id: user_id } });
};
exports.deleteAdminById = deleteAdminById;
var createAdmin = function (data) {
    return prisma_1.default.admin.create({ data: data });
};
exports.createAdmin = createAdmin;
//# sourceMappingURL=admin.queries.js.map