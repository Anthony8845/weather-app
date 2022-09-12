import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectorWeatherCity, selectorWeatherCode, selectorWeatherDesc, selectorWeatherIconUrl, selectorWeatherTemp} from "../../selectors/selectors";
import { state, selectorWeatherHourly, selectorIsFetching } from './../../selectors/selectors';
import { weatherImg } from './../../img/index';



export const WeatherCard = styled.div`
    margin-top: 30px;
    padding-top: 10px;
    display: flex;
    flex-direction:column;
    text-align: center;
    align-items: center;
    background-color: grey;
    background-size: cover;
    width:100%;
    min-height: 300px;
    border-radius: 5px;
    text-shadow: 1px 1px 3px black;
    font-weight: bold;


& section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
& div {
    width: 60px;
    height: 60px;
    margin: 30px 8px 0 8px;
    background-color: rgba(104, 104, 104, 0.6);
    padding: 8px;
    border-radius: 5px;
    box-shadow: 1px 1px 8px black;
}

}
`



export const Fetchng = styled.div`
    width: 100px;
    height: 100px;
    border-radius:100%;
    margin:30vh auto;
    border: 2px dashed green;
`

let idKey = 0;

const TodayWeather = () => {

    console.log(useSelector(state))
    const weatherCity = useSelector(selectorWeatherCity);
    const weatherTemp = useSelector(selectorWeatherTemp);
    const weatherDesc = useSelector(selectorWeatherDesc);
    const weatherCode = useSelector(selectorWeatherCode);
    const weatherHourly = useSelector(selectorWeatherHourly)
    const isFetching = useSelector(selectorIsFetching)
    
    const formatTime = (e) => {
        if(e === '0') {
            return e + ':00'
        } else {
            let time = e.replace(/0*$/, '')
            return time + ':00'
        }
    }

   
    return isFetching === false ? (
    // return (
      <Fetchng></Fetchng>
    ) 
    : (
        <WeatherCard style={{backgroundImage:`url(${weatherImg[weatherCode]})`}}>
        Город
        <h2>{weatherCity}</h2>
        <p>{weatherTemp} C°</p>
        <p>{weatherDesc}</p>
        
        <section>
          {weatherHourly?.map((e) => (
            <div key={idKey++}>
              <p>{formatTime(e.time)}</p>
              <p>{e.tempC} C°</p>
            </div>
          ))}
        </section>
      </WeatherCard>
    );
}

export default TodayWeather