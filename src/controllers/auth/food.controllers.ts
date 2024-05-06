import { Request, Response } from "express";
import fileUpload, { FileArray, UploadedFile } from "express-fileupload";
import {
  createFood,
  deleteFoodById,
  findAllFood,
  findFood,
  updateFoodById,
} from "@/utils/queries/food.queries";
import {
  CreatedSuccessfully,
  InternalServerError,
  Success,
} from "@/utils/apiResponse";
import { writeFileSync } from "fs";

export const getFoods = async (req: Request, res: Response) => {
  try {
    const data = await findAllFood({
      name: { contains: req.params?.search?.toLowerCase() || undefined },
    });

    res.json(Success("Food has retrieved", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

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

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const data = await deleteFoodById(parseInt(req.params.id));

    res.json(Success("Food has deleted", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};

export const postCreateFood = async (req: Request, res: Response) => {
  try {
    const image = req.files!.image as UploadedFile;
    const fileName = Date.now() + "_" + image.name;
    writeFileSync("./public/uploaded/" + fileName, image.data);
    const food = {
      name: req.body.name,
      spicy_level: req.body.spicy_level,
      price: parseFloat(req.body.price),
      image: fileName,
    };

    const data = await createFood(food);

    res.status(201).json(Success("Food has created", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
export const updateFood = async (req: Request, res: Response) => {
  try {
    const image = req.files!.image as UploadedFile;
    const fileName = Date.now() + "_" + image.name;
    writeFileSync("./public/uploaded/" + fileName, image.data);
    const food = {
      name: req.body.name,
      spicy_level: req.body.spicy_level,
      price: parseFloat(req.body.price),
      image: fileName,
    };

    const data = await updateFoodById(parseInt(req.params.id), food);

    res.status(201).json(CreatedSuccessfully("Food has created", { data }));
  } catch (error) {
    console.log(error);
    return res.status(500).json(InternalServerError("Internal server error"));
  }
};
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
