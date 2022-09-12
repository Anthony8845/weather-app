const SET_WEATHER = 'SET_WEATHER'
const SET_IS_FETCHING = 'SET_IS_FETCHING'


const defaultState = {
    weather: [],
    isFetching: false,
}

export default function weatherReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload,
                isFetching: false,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload,
            }
        default:
            return state
    }
}


export const setWeather = (weather) => ({type:SET_WEATHER, payload:weather})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
