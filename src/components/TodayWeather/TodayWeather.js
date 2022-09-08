import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectorWeatherCity, selectorWeatherDesc, selectorWeatherTemp} from "../../selectors/selectors";
import { state, selectorWeatherHourly } from './../../selectors/selectors';

export const WeatherCard = styled.div`
    margin-top: 30px;
    padding-top: 10px;
    display: flex;
    flex-direction:column;
    text-align: center;
    align-items: center;
    background-color: grey;
    background: url('https://i.gifer.com/srY.gif') no-repeat;
    background-size: cover;
    width:100%;
    min-height: 200px;
    border-radius: 5px;


& section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
& div {
    width: 60px;
    height: 60px;
    margin: 20px 8px 0 8px;
    background-color: rgb(104, 104, 104);
    padding: 8px;
    border-radius: 5px;
    box-shadow: 1px 1px 8px black;
}

}
`


const TodayWeather = () => {

    console.log(useSelector(state))
    const weatherCity = useSelector(selectorWeatherCity);
    const weatherTemp = useSelector(selectorWeatherTemp);
    const weatherDesc = useSelector(selectorWeatherDesc);
    const weatherHourly = useSelector(selectorWeatherHourly)

    const formatTime = (e) => {
        if(e === '0') {
            return e + ':00'
        } else {
            let time = e.replace(/0*$/, '')
            return time + ':00'
        }
    }

    
    // console.log(weatherBlock)
    return (
        <WeatherCard>
            Город
            <h2>{weatherCity}</h2>
            <p>{weatherTemp} C°</p>
            <p>{weatherDesc}</p>
            <section>
                {weatherHourly?.map((e) => 
                    <div>
                        <p>{formatTime(e.time)}</p>
                        <p>{e.tempC} C°</p>
                    </div>
                )}
            </section>
            
        </WeatherCard>
    )
}

export default TodayWeather