import { React, useEffect } from "react";
import SearchCity from "./components/search/SearchCity";
import TodayWeather from "./components/TodayWeather/TodayWeather";
import styled from "styled-components";
import RouteBar from "./components/routeBar/RouteBar";
import Next7Weather from "./components/Next7Weather/Next7Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TomorrowWeather from "./components/TomorrowWeather/TomorrowWeather";
import { useDispatch } from "react-redux";
import { getWeather } from "./action/weather";
import IFrameMeteo from "./components/IFrameMeteo/IFrameMeteo";

const WrapperApp = styled.div`
  border-radius: 10px;
  margin: 0 auto;
  padding: 30px;
  margin-top: 20px;
  width: 90%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: rgb(32, 32, 32);
  box-shadow: 2px 3px 15px black;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather());
  }, []);

  return (
    <BrowserRouter>
      <WrapperApp>
        <div className="App">
          <SearchCity />
          <RouteBar />
          <Routes>
            <Route exact path="/" element={<TodayWeather />} />
            <Route path="/Tomorrow" element={<TomorrowWeather />} />
            <Route path="/Next7Weather" element={<Next7Weather />} />
          </Routes>
          <IFrameMeteo />
        </div>
      </WrapperApp>
    </BrowserRouter>
  );
}

export default App;
