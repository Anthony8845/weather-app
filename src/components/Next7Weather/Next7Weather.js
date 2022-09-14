import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  selectorIsFetching,
  selectorWeatherCity,
  selectorWeatherNext,
  selectorWeatherTemp,
} from "../../selectors/selectors";
import autumn from "../../img/autumn.gif";
import { Fetching } from "../TodayWeather/TodayWeather";
import {
  selectorWeatherIconUrl,
  selectorWeatherDesc,
} from "./../../selectors/selectors";

const Weather = styled.div`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  align-items: end;
  & div {
    margin-top: 30px;
    cursor: pointer;
    width: 80px;
    min-width: 80px;
    height: 150px;
    border: 1px solid grey;
    border-radius: 10px;
    padding-top: 10px;
    background: rgba(104, 104, 104, 0.8);
  }
  & div:last-child {
    margin-right: 30px;
  }

  & img {
    margin: 15px 0 15px 0;
    width: 35px;
    height: 35px;
  }

  & div:hover {
    box-shadow: 0 3px 10px green;
    z-index: 1;
  }
  & hr {
    width: 40px;
    margin: 5px auto;
  }
`;
const WeatherToday = styled.div`
  margin: 30px 30px 0 10px;
  cursor: pointer;
  width: 120px;
  min-width: 120px;
  min-height: 200px;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 10px 5px;
  background: rgba(104, 104, 104, 0.8);
  text-align: center;
  word-wrap: break-word;
  & hr {
    width: 70px;
    margin: 10px auto;
  }
  & img {
    margin: 5px 0 0 0;
  }
`;
const WeatherWrap = styled.div`
  font-weight: bold;
  margin-top: 30px;
  padding-bottom: 10px;
  width: 100%;
  height: 300px;
  background: url(${autumn}) no-repeat;
  background-size: cover;
  border-radius: 5px;
  display: flex;
  & img {
    border-radius: 5px;
    opacity: 0.7;
  }
`;

const Next7Weather = () => {
  const cityWeather = useSelector(selectorWeatherCity);
  const weathersBlock = useSelector(selectorWeatherNext);
  const isFetching = useSelector(selectorIsFetching);
  const weatherTemp = useSelector(selectorWeatherTemp);
  const weatherIconUrl = useSelector(selectorWeatherIconUrl);
  const weatherDesc = useSelector(selectorWeatherDesc);

  const date = (e) => {
    const dateArr = e.split("-").reverse();
    dateArr.pop();
    return dateArr.join(".");
  };

  return isFetching === true ? (
    <Fetching></Fetching>
  ) : (
    <WeatherWrap>
      <WeatherToday>
        <h3>{cityWeather}</h3>
        <h4>Сегодня</h4>
        <hr />
        <p>{weatherDesc}</p>
        <img src={weatherIconUrl} alt="" />
        <p>{weatherTemp} C°</p>
      </WeatherToday>

      <Weather>
        {weathersBlock?.map((e, index) => {
          if (weathersBlock[0] !== e) {
            if (index <= 7) {
              return (
                <div key={e.date}>
                  <p>{date(e.date)}</p>
                  <hr />
                  <img src={e.hourly[4].weatherIconUrl[0].value} alt="" />
                  <p>{e.avgtempC} C°</p>
                </div>
              );
            }
          }
        })}
      </Weather>
    </WeatherWrap>
  );
};

export default Next7Weather;
