import React, {useEffect} from 'react'
import App from './App'
import localStorageService from './localStorage'
import {addCityWeather, addCityWeatherThunk, CityWeather} from "./redux/weatherReducer";
import {useTypedSelector} from "./hooks/useTypedSelector";
import useAction from "./hooks/useAction";



const AppContainer = () => {
/*
        const citiesWeather = useSelector<AppRootStateType, CityWeather[]>((state) => state.weather.citiesWeather)
*/
    const {citiesWeather} = useTypedSelector((state) => state.weather)

    const {refetchCitiesWeatherThunk,setCities} = useAction()

    useEffect(() => {
        const cities = localStorageService.getCities()
        if (cities && cities.length) {
            setCities({citiesWeather:cities})
            refetchCitiesWeatherThunk(cities)
        }
    }, [])


    useEffect(() => {
        localStorageService.setCities(citiesWeather)
    }, [citiesWeather])
    return <App/>
}

export default AppContainer
