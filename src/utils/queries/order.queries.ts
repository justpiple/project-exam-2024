import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export const findAllOrder = (where?: Prisma.Order_listWhereInput) => {
  return prisma.order_list.findMany({ where, include: { order_detail: true } });
};

export const findOrder = (where: Prisma.Order_listWhereInput) => {
  return prisma.order_list.findFirst({ where });
};

export const updateOrderById = (
  user_id: number,
  data: Prisma.Order_listUpdateInput
) => {
  return prisma.order_list.update({ where: { id: user_id }, data });
};

export const deleteOrderById = (user_id: number) => {
  return prisma.order_list.delete({ where: { id: user_id } });
};

export const createOrder = (data: Prisma.Order_listCreateInput) => {
  return prisma.order_list.create({ data });
};
