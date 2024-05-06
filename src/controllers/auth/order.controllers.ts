import { Request, Response } from "express";
import { createOrder, findAllOrder } from "@/utils/queries/order.queries";
import { InternalServerError, Success } from "@/utils/apiResponse";

export const getOrders = async (req: Request, res: Response) => {
  try {
    const data = await findAllOrder();

    res.json(Success("Order list has retrieved", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

export const postCreateOrder = async (req: Request, res: Response) => {
  try {
    const order = {
      customer_name: req.body.customer_name,
      table_number: req.body.table_number,
      order_date: req.body.order_date,
    };

    const data = await createOrder({
      ...order,
      order_detail: { create: req.body.order_detail },
    });

    res.status(201).json(Success("Order list has created", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
