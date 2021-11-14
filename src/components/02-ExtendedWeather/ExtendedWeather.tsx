import React, {useEffect} from "react";
import {Card} from "./c1-Card/Card";
import './c1-Card/Card.css';
import {SearchCity} from "./c3-SearchCity/SearchCity";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const ExtendedWeather = () => {
    const { citiesWeather } = useTypedSelector((state) => state.weather)

    const formatCards = () => {
        debugger;

        return citiesWeather.map((day, index) => <Card day={day} key={day.id}/>)
    }

    return (
        <div className="">
            <h1 className="display">Прогноз погоды на 5 дней</h1>
            <SearchCity />
            <div className="display">
                {formatCards()}
            </div>
        </div>
    )
}
export default ExtendedWeather;
