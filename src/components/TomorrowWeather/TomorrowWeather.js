import React from "react";
import { useSelector } from "react-redux";
import {
  selectorIsFetching,
  selectorWeatherCity,
  selectorWeatherCode,
  selectorWeatherDesc,
  selectorWeatherHourlyTomorrow,
  selectorWeatherTempTomorrow,
} from "../../selectors/selectors";
import { WeatherCard, Fetching } from "../TodayWeather/TodayWeather";
import { weatherImg } from "./../../img/index";
import { formatTime } from "../TodayWeather/TodayWeather";

let idKey = 0;

const TomorrowWeather = () => {
  const weatherCity = useSelector(selectorWeatherCity);
  const weatherTemp = useSelector(selectorWeatherTempTomorrow);
  const weatherDesc = useSelector(selectorWeatherDesc);
  const weatherCode = useSelector(selectorWeatherCode);
  const weatherHourly = useSelector(selectorWeatherHourlyTomorrow);
  const isFetching = useSelector(selectorIsFetching);

  return isFetching === false ? (
    // return (
    <Fetching></Fetching>
  ) : (
    <WeatherCard style={{ backgroundImage: `url(${weatherImg[weatherCode]})` }}>
      Завтра в городе
      <h2>{weatherCity}</h2>
      <p>{weatherTemp} C°</p>
      <p>{weatherDesc}</p>
      <section>
        {weatherHourly?.map((e) => (
          <div key={idKey++}>
            <p>{formatTime(e.time)}</p>
            <hr />
            <img src={e.weatherIconUrl[0].value} alt="" />
            <p>{e.tempC} C°</p>
          </div>
        ))}
      </section>
    </WeatherCard>
  );
};

export default TomorrowWeather;
