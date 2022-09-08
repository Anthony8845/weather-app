const SET_WEATHER = 'SET_WEATHER'


const defaultState = {
    weather: [],
    isFetching: true,
}

export default function weatherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                isFetching: false,
                weather: action.payload,
            }
            
        default:
            return state
    }
}


export const setWeather = (weather) => ({type:SET_WEATHER, payload:weather})
