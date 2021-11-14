import dateFormat from 'dateformat'
import React, {FC} from 'react'
import s from './Chart.module.css'
import {Table} from "./Table/Table";
import {CityWeather} from "../../../redux/weatherReducer";

type ChartPropsType = {
    allDaysWeatherData: any[]
}

const Chart: FC<ChartPropsType> = React.memo(({allDaysWeatherData}) => {
    const weatherData = allDaysWeatherData.map(oneDayWeather => ({
        date: dateFormat(oneDayWeather.dt_txt, 'dd.mm HH:MM'),
        Temperature: Math.floor(oneDayWeather.main.temp)
    }))
    return (
        <div className={s.chartContainer}>
            <Table data={weatherData}/>
        </div>
    )
})

export default Chart