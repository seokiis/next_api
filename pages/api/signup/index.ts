import dbConnect from "@/db/dbConnect";

import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import User from "@/db/models/\bUser";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  console.log(mongoose.connection.readyState);

  switch (req.method) {
    case "POST":
      const { name, email, password, role } = req.body;

      // email, password, name, role이 모두 존재하는지 확인
      if (!email || !password || !name || !role) {
        return res.status(400).json({
          message: "All fields are required: email, password, name, and role",
        });
      }

      // user table에서 없는 email이라면 새로운 유저를 생성
      if (await User.findOne({ email }).then((user) => user === null)) {
        console.log("Creating new user with data:", {
          email,
          password,
          name,
          role,
        });
        const newUser = await User.create(req.body);
        console.log(newUser.toObject());
        res.status(200).json(newUser);
      }
      // user table에서 이미 있는 email이라면 409 status code를 반환
      else {
        res.status(409).send({
          message: "Email already exists",
        });
      }
      break;
    default:
      res.status(404).send({});
      break;
  }
}
