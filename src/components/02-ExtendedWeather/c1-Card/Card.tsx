import React from 'react';
import './Card.css';
import {CityWeather} from "../../../redux/weatherReducer";
import dateFormat from 'dateformat';
import Chart from "../c2-Chart/Chart";

type CardType = {
    day: CityWeather
}
export const Card = (props: CardType) => {
    console.log(props.day.weather[0])
    const currentWeather = props.day.weather[0]
    const formatedDate = dateFormat(currentWeather.dt_txt, 'ddd, d mmmm, HH:MM')

    return (
        <div className="card">
            <div>
                <h3 className="card-title">{formatedDate}</h3>
                <h2>{Math.round(currentWeather.main.temp)} °C</h2>
                <div className="card-body">
                    <Chart
                        allDaysWeatherData={props.day.weather}
                    />
                </div>
            </div>
        </div>
    )
}