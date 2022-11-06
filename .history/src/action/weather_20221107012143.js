import axios from 'axios'
import { setIsFetching, setWeather } from '../reducers/weatherReducer'
import { city } from '../components/search/SearchCity'



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

const API_KEY = 'f422739042b84fa0b59220625220611'

export const getWeather = (searchCity = 'Нижний Новгород') => {

  return async (dispatch) => {
    dispatch(setIsFetching(false))
    await axios.get(
      `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&format=JSON&lang=ru&q=${searchCity}`
    ).then((response) => {
      
      if (!response.data.data.error) {
        dispatch(setWeather(response.data));
      }  
    }).catch((error) => {
        console.error(error)
    })
    
  };
}