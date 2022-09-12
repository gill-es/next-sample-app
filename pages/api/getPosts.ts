import { NextApiRequest, NextApiResponse } from "next";

const mockData = require("./mock.json");

const getPosts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(mockData);
};

export default getPosts;
