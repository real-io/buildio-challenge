import Units from "../constants/Units";

export const convertTemperature = (kelvin?: number, system?: string) => {
  if (kelvin === undefined) {
    return kelvin;
  }
  switch (system) {
    case Units.METRIC:
      return Math.round((kelvin + -273.15) * 100) / 100;
    case Units.IMPERIAL:
      return Math.round((((kelvin - 273.15) * (9 / 5) + 32) * 100) / 100);
    default:
      return kelvin;
  }
};

export const convertWindSpeed = (meters?: number, system?: string) => {
  if (meters === undefined) {
    return meters;
  }

  switch (system) {
    case Units.METRIC:
      return meters;
    case Units.IMPERIAL:
      return Math.round((meters * 2.237 * 100) / 100);

    default:
      return meters;
  }
};
