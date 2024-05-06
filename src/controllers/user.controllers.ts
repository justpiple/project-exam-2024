import { Request, Response } from "express";
import { encrypt } from "@/utils/encryption";
import { createAdmin } from "@/utils/queries/admin.queries";
import { CreatedSuccessfully, InternalServerError } from "@/utils/apiResponse";

export const postCreateUser = async (req: Request, res: Response) => {
  try {
    const user = {
      email: req.body.email,
      name: req.body.name,
      password: encrypt(req.body.password),
    };

    const data = await createAdmin(user);

    res.status(201).json(CreatedSuccessfully("Success create data"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
