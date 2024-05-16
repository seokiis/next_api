import QRCode from "@/db/models/QRCode";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      const qrcode = await QRCode.findById(id);
      res.send(qrcode);
      break;
    case "DELETE":
      await QRCode.findByIdAndDelete(id);
      res.status(204).send({});
      break;
    case "PATCH":
      const patchedQRCode = await QRCode.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(patchedQRCode);
      break;
    default:
      res.status(404).send({});
      break;
  }
}
