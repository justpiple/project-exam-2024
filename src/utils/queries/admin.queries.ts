import { Prisma } from "@prisma/client";
import prisma from "@/lib/prisma";

export const findAllAdmin = (where?: Prisma.AdminWhereInput) => {
  return prisma.admin.findMany({ where });
};

export const findAdmin = (where: Prisma.AdminWhereInput) => {
  return prisma.admin.findFirst({ where });
};

export const updateAdminById = (
  user_id: number,
  data: Prisma.AdminUpdateInput
) => {
  return prisma.admin.update({ where: { id: user_id }, data });
};

export const deleteAdminById = (user_id: number) => {
  return prisma.admin.delete({ where: { id: user_id } });
};

export const createAdmin = (data: Prisma.AdminCreateInput) => {
  return prisma.admin.create({ data });
};
