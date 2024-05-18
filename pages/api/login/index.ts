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
      const { email, password } = req.body;

      // email, password가 모두 존재하는지 확인
      if (!email || !password) {
        return res.status(400).json({
          message: "All fields are required: email, password",
        });
      }
      // user table에서 있는 email인지 확인
      const user = await User.findOne({ email });
      if (user) {
        if (user.password === password) {
          res.send(user);
        } else {
          res.status(401).send({
            message: "Password is incorrect",
          });
        }
      } else {
        res.status(404).send({
          message: "User not found",
        });
      }
  }
}
