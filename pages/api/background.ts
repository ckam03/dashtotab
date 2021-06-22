import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `https://API.unsplash.com/collections/6266280/photos/?client_id=${process.env.unsplashAPIKEY}`;
  const response = await fetch(url);
  const result = await response.json();
  return res.status(200).json({ result });
}