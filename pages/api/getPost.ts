import { NextApiRequest, NextApiResponse } from "next";

const mockData = require("./mock.json");

const getPost = (req: NextApiRequest, res: NextApiResponse) => {
  const post = mockData.find( (item: { id: string }) => item.id == req.query.id)
  res.status(200).json(post);
};

export default getPost;
