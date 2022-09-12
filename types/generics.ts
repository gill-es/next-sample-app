import { NextApiRequest, NextApiResponse } from "next";

export type ObjectWithId = {
  id: number | string;
};

export type APIRequest = {
  req?: NextApiRequest;
  res?: NextApiResponse;
};
