import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faCircleQuestion,
  IconDefinition,
  faSun,
  faCloud,
  faCloudBolt,
  faCloudSun,
  faWind,
  faSnowflake,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import type { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface WeatherIconProps {
  icon?: string;
  color: string;
  size: SizeProp;
  addClassName?: string;
}

const WeatherIcon = (props: WeatherIconProps) => {
  const getWeatherIconById = (icon?: string): IconDefinition => {
    switch (icon) {
      case "01d":
      case "01n":
        return faSun;
      case "02d":
      case "02n":
        return faCloudSun;
      case "03d":
      case "03n":
      case "04d":
      case "04n":
        return faCloud;
      case "09d":
      case "09n":
        return faCloudShowersHeavy;
      case "10d":
      case "10n":
        return faCloudRain;
      case "11d":
      case "11n":
        return faCloudBolt;
      case "13d":
      case "13n":
        return faSnowflake;
      case "50d":
      case "50n":
        return faWind;

      default:
        return faCircleQuestion;
    }
  };

  return (
    <div className={props.addClassName}>
      <FontAwesomeIcon
        icon={getWeatherIconById(props?.icon)}
        size={props.size}
        color={props.color}
      />
    </div>
  );
};

export default WeatherIcon;
