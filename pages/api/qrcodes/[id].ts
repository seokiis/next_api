import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      res.send(id);
      break;

    case "PATCH":
      res.send({
        ...req.body,
        id,
      });
      break;

    case "DELETE":
      res.status(204).send({});
      break;

    default:
      res.status(404).send({});
      break;
  }
}
