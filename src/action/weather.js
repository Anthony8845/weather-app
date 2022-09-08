import axios from 'axios'
import { setWeather } from '../reducers/weatherReducer'

// const API_KEY = 'e6f5009e8c2594b628084e40da6196da'
// let count = 0

// export const getWeather = (searchCity = 'moscow') => {
//     count++
//     if(count<60){
//         return async (dispatch) => {
//             const response = 
//             await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&lang=ru&appid=${API_KEY}&units=metric`)
//             dispatch(setWeather(response.data))
//             console.log(response.data)
//         }
//     } else {
//         return console.log('stop')
//     }
    
// }

const API_KEY = '787dce194ba146b8a37135856220609'

export const getWeather = (searchCity = 'москва') => {
  return async (dispatch) => {
    await axios.get(
      `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&q=${searchCity}&format=JSON&lang=ru`
    ).then((response) => {
        dispatch(setWeather(response.data));
        // console.log(setWeather(response.data));
    }).catch((error) => {
        console.error(error)
    })
    
  };
}