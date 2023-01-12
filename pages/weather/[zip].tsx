import { useRouter } from "next/router";
import Container from "../../components/Container/Container";
import Weekday from "../../constants/Weekday";
import WeatherService from "../../services/weather";
import Forecast from "../../components/Forecast/Forecast";

const Weather = (props: any) => {
  return (
    <div>
      <Container>
        {props?.city ? (
          <Forecast city={props.city} days={props.days} />
        ) : (
          <h1>No data found!</h1>
        )}
      </Container>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const data = await WeatherService.getForecast(context.params.zip);
  // Parse step data into a more readable structure
  const days = data?.list?.reduce((days: any, step: any) => {
    const date: any = Weekday[Number(new Date(step.dt * 1000).getDay())];
    if (!days[date]) {
      days[date] = [];
    }
    days[date].push(step);
    return days;
  }, {});

  if (data?.city === undefined) {
    return {
      props: { city: null, days: null },
    };
  } else {
    return {
      props: { city: data?.city, days },
    };
  }
}

export default Weather;
