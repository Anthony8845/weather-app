
export const state = state => state?.weather

export const selectorWeatherCity = (state) => state?.weather.weather?.data?.request[0].query
export const selectorWeatherTemp = (state) => state?.weather.weather?.data?.current_condition[0].temp_C
export const selectorWeatherDesc = (state) => state?.weather.weather?.data?.current_condition[0].lang_ru[0].value

export const selectorWeatherHourly = (state) => state?.weather.weather?.data?.weather[0].hourly;