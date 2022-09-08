import React from "react";
import styled from "styled-components";
import { WeatherCard } from "../TodayWeather/TodayWeather";


const TomorrowWeather = () => {
    return (
        <WeatherCard>
            Tomorrow Weather Block
            <h2>Moscow</h2>
            <p>22C°</p>
        </WeatherCard>
    )
}

export default TomorrowWeather