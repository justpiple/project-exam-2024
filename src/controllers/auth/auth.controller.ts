import { InternalServerError, Success, Unauthorize } from "@/utils/apiResponse";
import { compareHash } from "@/utils/encryption";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const Logout = (req: Request, res: Response) => {
  res.clearCookie("token").end();
};

export const CurrentSession = (req: Request, res: Response) => {
  res.json(Success("Success load current user", { data: req.token }));
};

interface LoginReqProps extends Request {
  body: {
    email: string;
    password: string;
  };
}

// Fungsi login
export const Login = async (req: LoginReqProps, res: Response) => {
  try {
    const user: any = {};

    if (!user) {
      return res.status(401).json(Unauthorize("Email atau Password salah!"));
    }

    // Cek ke cocokan password yang di request dengan yg di database
    const match = compareHash(req.body.password, user?.password);

    //Jika password dan confirm password tidak cocok
    if (!match) {
      return res.status(401).json(Unauthorize("Email atau Password salah!"));
    }

    const id_siswa = user?.id;
    const email = user?.email;
    const name = user?.name;
    const role = user?.role;

    // Membuat refresh token
    const token = jwt.sign(
      { id: id_siswa, name, email, role: role },
      process.env.JWT_SECRET,
      {
        expiresIn: "15d",
      }
    );

    // Membuat http cookie yang dikirimkan ke sisi client
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 24 * 60 * 60 * 1000, //expired dalam 15 hari
      secure: true,
      sameSite: "none",
    });
    res.json(
      Success("Login success", {
        data: {
          token,
          id: id_siswa,
          name,
          role,
        },
      })
    );
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json(InternalServerError("Email atau Password salah!"));
  }
};
