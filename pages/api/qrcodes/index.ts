import dbConnect from "@/db/dbConnect";

import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import QRCode from "@/db/models/QRCode";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  console.log(mongoose.connection.readyState);

  switch (req.method) {
    case "GET":
      const qrcodes = await QRCode.find();
      res.send(qrcodes);
      break;
    case "POST":
      const newQRCode = await QRCode.create(req.body);
      res.send(newQRCode);
      break;
    default:
      res.status(404).send({});
      break;
  }
}
