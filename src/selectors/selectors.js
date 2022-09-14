
export const state = state => state?.weather

export const selectorWeatherCity = (state) => state?.weather.weather?.data?.request[0].query
export const selectorWeatherTemp = (state) => state?.weather.weather?.data?.current_condition[0].temp_C
export const selectorWeatherTempTomorrow = (state) => state?.weather?.weather?.data?.weather[1].avgtempC
export const selectorWeatherDesc = (state) => state?.weather.weather?.data?.current_condition[0].lang_ru[0].value
export const selectorWeatherCode = (state) => state?.weather.weather?.data?.current_condition[0].weatherCode
export const selectorWeatherIconUrl = (state) => state?.weather.weather?.data?.current_condition[0].weatherIconUrl[0].value

export const selectorWeatherHourly = (state) => state?.weather.weather?.data?.weather[0].hourly;
export const selectorWeatherHourlyTomorrow = (state) => state?.weather.weather?.data?.weather[1].hourly;
export const selectorWeatherNext = (state) => state?.weather.weather?.data?.weather;

export const selectorIsFetching = (state) => state?.bool