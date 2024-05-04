import { Request, Response } from "express";
import { encrypt } from "@/utils/encryption";
import {
  createUser,
  deleteUserById,
  findAllUser,
  findUser,
  updateUserById,
} from "@/utils/queries/user.queries";
import {
  CreatedSuccessfully,
  InternalServerError,
  NotFound,
  Success,
} from "@/utils/apiResponse";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const data = await findAllUser();

    res.json(Success("Success load data", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const data = await findUser({ id: req.params.id });

    if (!data) {
      return res.status(404).json(NotFound("Data not found"));
    }

    res.json(Success("Success load data", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const data = await deleteUserById(req.params.id);

    res.json(Success("Success delete data"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

export const postCreateUser = async (req: Request, res: Response) => {
  try {
    const user = {
      email: req.body.email,
      name: req.body.name,
      password: encrypt(req.body.password),
    };

    const data = await createUser(user);

    res.status(201).json(CreatedSuccessfully("Success create data"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = {
      email: req.body.email,
      name: req.body.name,
      password: encrypt(req.body.password),
    };

    const data = await updateUserById(req.params.id, user);

    res.status(201).json(Success("Success update data"));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
