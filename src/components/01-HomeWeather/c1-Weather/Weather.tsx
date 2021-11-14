import React, {useEffect, useState} from 'react'
import WeatherDetails from "../c2-WeatherDetails/WeatherDetails";
import {useDispatch} from "react-redux";
import {getWeather} from "../../../redux/weatherReducer";

const initialState = {
    time: 0,
    temperature: 0,
    humid: 0,
    weatherCode: 0,
    descript: '',
    windSpeed: 0,
}

type WidgetType = {
    city: string
}
const Weather = (props: WidgetType) => {
    const [data, setData] = useState({...initialState})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getWeather(props.city, setData))
    }, [])

    return (
        <div className="widget">
            <WeatherDetails
                city={props.city}
                temperature={data.temperature}
                humidity={data.humid}
                descript={data.descript}
                windSpeed={data.windSpeed}/>
        </div>
    )
}
export default Weather
