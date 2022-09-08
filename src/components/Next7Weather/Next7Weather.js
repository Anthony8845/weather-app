import React from "react";
import styled from "styled-components";

const Weather = styled.div`
    
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    text-align:center;
& div {
    margin-top:30px;
    cursor: pointer;
    width:117px;
    min-width:117px;
    min-height: 200px;
    border: 1px solid grey;
    border-radius: 10px;
    padding-top: 10px;
    background: grey;
}

& div:hover {
    box-shadow: 0 3px 10px green;
    z-index:1;
}
`
const monthsArr = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']

const Next7Weather = (props) => {
  const cityWeather = props?.weathers?.weather?.data?.request[0].query;
  const weathersBlock = props?.weathers?.weather?.data;
  
const date = (e) => {
  let dateArr = e.split('-').reverse()
  delete dateArr[2]
  
  // console.log(dateArr)
}


  console.log(weathersBlock)
    return (
      <Weather>

        {weathersBlock?.weather.map((e) =>
          <div>
            <h2>{cityWeather}</h2>
            <p>{e.avgtempC} C°</p>
            <p>{date(e.date)}</p>
          </div>
           
         )}

         

        {/* <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div>
        <div>
          Weather Block
          <h2>New York</h2>
          <p>25C°</p>
        </div> */}
      </Weather>
    );
}

export default Next7Weather