import {Dispatch} from "redux";
import {weatherAPI} from "../api/api";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CityWeather = {
    city: string
    country: string
    weather: any[]
    id: number
    tempScale: 'F' | 'C'
}

export type WeatherStateType = {
    citiesWeather: CityWeather[]
}
const initialState: WeatherStateType = {
    citiesWeather: []
}
const generateCityObj = (defaultData: any) => {
    return {
        city: defaultData.city.name,
        country: defaultData.city.country,
        weather: defaultData.list,
        id: Date.now(),
        tempScale: 'C'
    } as CityWeather
}
const slice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        addCityWeather(state, action: PayloadAction<{ cityWeather: CityWeather }>) {
            return {...state, citiesWeather: [action.payload.cityWeather]}
        },
        refetchCityWeather(state, action: PayloadAction<{ id: number, weather: any[], name: string }>) {
            return {
                ...state, citiesWeather: state.citiesWeather.map(cityW => {
                    if (cityW.id === action.payload.id) {
                        cityW.weather = action.payload.weather
                        cityW.city = action.payload.name
                    }
                    return cityW
                })
            }
        },
        setCities(state,action:PayloadAction<{citiesWeather: CityWeather[]}>){
            return { ...state, citiesWeather: action.payload.citiesWeather }
        }
    }
})

export const weatherReducer = slice.reducer
export const {
    addCityWeather, refetchCityWeather,setCities
} = slice.actions

export const addCityWeatherThunk = (city: string) => async (dispatch: Dispatch) => {
    try {
        const data = await weatherAPI.getWeatherByCity(city)

        if (data.cod === '200') {
            const city = generateCityObj(data)

            await dispatch(addCityWeather({cityWeather: city}))
            debugger
            return city
        }
        return null

    } catch (e) {
        console.log(e)
    }
}
export const refetchCitiesWeatherThunk = (cities: CityWeather[]) => async (dispatch: any) => {
    try {
        cities.forEach(async (city) => {
            const data = await weatherAPI.getWeatherByCity(city.city)

            if (data.cod === '200') {
                await dispatch(refetchCityWeather({id: city.id, weather: data.list, name: data.city.name}))
            }
        })
    } catch (e) {
        console.log(e)
    }
}
export const getWeather = (city: string, setData: any) => (dispatch: Dispatch) => {
    weatherAPI.getWeather(city, setData)
        .then(r => r.data)
        .then(data => {
            const date = new Date()
            const time = date.getHours()
            let minutes = date.getMinutes()
            setData({
                time,
                minutes,
                city,
                temperature: Math.round(data.main.temp),
                humid: Math.round(data.main.humidity),
                descript: data.weather[0].description,
                weatherCode: data.weather[0].id,
                windSpeed: data.wind.speed
            })
        })
        .catch(error => console.error(error))
}
export default weatherReducer;