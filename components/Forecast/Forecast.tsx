import { useState } from "react";
import Weekday from "../../constants/Weekday";
import styles from "./Forecast.module.scss";
import ForecastBackground from "../ForecastBackground";
import Title from "../Title";
import Text from "../Text";
import ForecastDay from "../ForecastDay";
import WeatherIcon from "../WeatherIcon";
import Units from "../../constants/Units";
import { convertTemperature } from "../../utils/units";
import Select from "react-select";

export interface ForecastStep {
  dt: number;
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
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
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
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface City {
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
}

export interface ForecastProps {
  city: City;
  days: {
    [key: string]: Array<ForecastStep>;
  };
}

const Forecast = (props: ForecastProps) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [unitSystem, setUnitSystem] = useState(Units.METRIC);

  const unitSystemOptions = [
    { value: Units.METRIC, label: "Metric" },
    { value: Units.IMPERIAL, label: "Imperial" },
  ] as any;

  const getCurrentStepByDay = (value: string) => {
    const currentTime = new Date();

    if (props?.days[value] === undefined) {
      return;
    }

    for (let day of props?.days[value]) {
      if (day.dt * 1000 > currentTime.getTime()) {
        return day;
      }
      return props.days[value][props.days[value].length - 1];
    }
  };

  const handleDayClick = (index: number) => {
    if (index === activeIndex) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };

  const handleUnitSystemChange = (e: any) => {
    setUnitSystem(e.value);
  };

  let currentWeekday = Weekday[new Date().getDay()];
  if (props.days[currentWeekday] === undefined) {
    currentWeekday = Weekday[(new Date().getDay() + 1) % 6];
  }

  const today = getCurrentStepByDay(currentWeekday);
  return (
    <section className={styles.wrapper}>
      <ForecastBackground>
        <div></div>
        <div className={styles.city_weather}>
          <Title
            addClassName={styles.city_name}
            content={props.city.name}
            level={Title.Levels.H1}
          />
          <Title
            addClassName={styles.current_temp}
            content={`${convertTemperature(today?.main?.temp, unitSystem)} ${
              unitSystem === Units.METRIC ? "C" : "F"
            }\u00B0
            `}
            level={Title.Levels.H2}
          />
          <Title
            addClassName={styles.description}
            content={today?.weather[0]?.description}
            level={Title.Levels.H3}
          />
          <WeatherIcon
            addClassName={styles.weather_icon}
            icon={today?.weather[0]?.icon}
            size={"5x"}
            color="white"
          />
          <div className={styles.unit_system_select}>
            <Select
              defaultValue={unitSystem}
              onChange={handleUnitSystemChange}
              options={unitSystemOptions}
            />
          </div>
        </div>
        <ul>
          {Object.keys(props.days).map((day, index) => {
            return (
              <li key={index} onClick={() => handleDayClick(index)}>
                <ForecastDay
                  showContent={activeIndex === index}
                  name={day}
                  forecasts={props.days[day]}
                  unitSystem={unitSystem}
                />
              </li>
            );
          })}
        </ul>
      </ForecastBackground>
    </section>
  );
};

export default Forecast;
