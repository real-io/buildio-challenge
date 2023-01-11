// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import type { ForecastData } from "../../services/weather";
import WeatherService from "../../services/weather";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ForecastData>
) {
  const { zip } = req.query;

  const data: ForecastData = await WeatherService.getForecast(Number(zip));

  res.status(200).json(data);
}
