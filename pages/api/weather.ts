import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = `http://api.openweathermap.org/data/2.5/forecast?q=Phoenix,us&units=imperial&&appid=${process.env.WEATHERAPIKEY}`;
  const response = await fetch(url);
  const result = await response.json();
  return res.status(200).json({ result });
}
// export const getServerSideProps: GetServerSideProps<Data> = async (context) => {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=Phoenix,us&units=imperial&&appid=${process.env.WEATHERAPIKEY}`;
//   const response = await fetch("url");
//   const result = await response.json();
//   return {
//     props: {
//       location: result.city.name,
//       temperature: result.list[0].main.temp,
//       icon: result.list[0].weather[0].icon,
//       description: result.list[0].weather[0].description,
//     },
//   };
// };
