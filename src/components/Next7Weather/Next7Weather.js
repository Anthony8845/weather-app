import React from "react";
import styled from "styled-components";
import { useSelector } from 'react-redux';
import { selectorWeatherCity, selectorWeatherNext } from "../../selectors/selectors";

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
let countDay = 0


const Next7Weather = (props) => {
  const cityWeather = useSelector(selectorWeatherCity)
  const weathersBlock = useSelector(selectorWeatherNext);
  

const date = (e) => {
  let dateArr
  if (countDay <= 6) {
    dateArr = e.split('-').reverse()
    dateArr.pop()
    countDay++
    return dateArr.join('.')
  } else {
    return dateArr
  }
}


    return (
      <Weather>

        {weathersBlock?.map((e) =>
          {if(countDay <= 6) {
            return (<div>
              <h2>{cityWeather}</h2>
              <p>{e.avgtempC} C°</p>
              <p>{date(e.date)}</p>
            </div>);
          }
        }
          
           
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