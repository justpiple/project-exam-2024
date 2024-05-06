import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export const findAllFood = (where?: Prisma.FoodWhereInput) => {
  return prisma.food.findMany({ where });
};

export const findFood = (where: Prisma.FoodWhereInput) => {
  return prisma.food.findFirst({ where });
};

export const updateFoodById = (
  user_id: number,
  data: Prisma.FoodUpdateInput
) => {
  return prisma.food.update({ where: { id: user_id }, data });
};

export const deleteFoodById = (user_id: number) => {
  return prisma.food.delete({ where: { id: user_id } });
};

export const createFood = (data: Prisma.FoodCreateInput) => {
  return prisma.food.create({ data });
};
