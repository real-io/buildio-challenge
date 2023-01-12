import styles from "./ForecastDay.module.scss";
import Text from "../Text";
import WeatherIcon from "../WeatherIcon";
import { Collapse } from "react-collapse";
import type { ForecastStep } from "../Forecast/Forecast";
import Units from "../../constants/Units";
import { convertTemperature, convertWindSpeed } from "../../utils/units";

interface ForecastDayProps {
  name: any;
  forecasts: Array<ForecastStep>;
  showContent: boolean;
  unitSystem: string;
}
const ForecastDay = (props: ForecastDayProps) => {

  /**
   * 
   * @returns The next forecast step ( 3 hour basis intervals)
   */
  const getCurrentForecast = () => {
    const currentTime = new Date();
    for (let forecast of props.forecasts) {
      if (forecast.dt * 1000 > currentTime.getTime()) {
        return forecast;
      }
      return props.forecasts[props.forecasts.length - 1];
    }
  };

  const currentForecast = getCurrentForecast();

  return (
    <div>
      <div className={styles.day}>
        <div className={styles.day_name}>
          <Text content={props.name} />
        </div>
        <div className={styles.day_temp}>
          <Text
            content={`${convertTemperature(
              currentForecast?.main.temp,
              props.unitSystem
            )} ${props.unitSystem === Units.METRIC ? "C" : "F"}\u00B0
          `}
          />
          <WeatherIcon
            icon={currentForecast?.weather[0]?.icon}
            size={"2x"}
            color="white"
          />
        </div>
      </div>

      <Collapse isOpened={props.showContent}>
        <div className={styles.day_info}>
          <div className={styles.wind}>
            <Text content={"Wind"} />
            <Text
              content={`${convertWindSpeed(
                currentForecast?.wind.speed,
                props.unitSystem
              )} ${props.unitSystem === Units.METRIC ? "m/s" : "miles/hour"}`}
            />
          </div>
          <div className={styles.chance}>
            <Text content={"Humidity"} />
            <Text content={`${currentForecast?.main.humidity} %`} />
          </div>
          <ul className={styles.forecast_steps}>
            {props.forecasts.map((step, index) => (
              <div className={styles.forecast_step} key={index}>
                <Text
                  content={`${convertTemperature(
                    step?.main.temp_max,
                    props.unitSystem
                  )} ${props.unitSystem === Units.METRIC ? "C" : "F"}\u00B0`}
                />
                <Text content={step?.weather[0]?.main} />
                <WeatherIcon
                  addClassName={styles.forecast_step_icon}
                  icon={step?.weather[0]?.icon}
                  size={"1x"}
                  color="white"
                />
                <Text content={step?.dt_txt.split(" ")[1]} />
              </div>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  );
};

export default ForecastDay;
