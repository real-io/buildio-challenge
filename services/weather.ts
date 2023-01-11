export type ForecastStepData = {
  dt: Date;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_text: string;
};

export type CityData = {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
};

export type ForecastData = {
  cod: string;
  message: string | number;
  cnt: number;
  list: Array<ForecastStepData>;
  city: CityData;
};

const WEATHER_API = "https://api.openweathermap.org";
const API_KEY = process.env.WEATHER_API_KEY;
const COUNTRY_CODE = "us";

export const getForecast = async (zip: number) => {
  const response = await fetch(
    `${WEATHER_API}/data/2.5/forecast?zip=${zip},${COUNTRY_CODE}&appid=${API_KEY}`,
    {
      method: "GET",
    }
  );

  const data = await response.json();
  return data;
};

export default {
  getForecast,
};
