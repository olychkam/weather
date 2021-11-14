import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Weather from "./components/01-HomeWeather/c1-Weather/Weather";
import ExtendedWeather from "./components/02-ExtendedWeather/ExtendedWeather";
import {Button} from "@material-ui/core";
import {CityWeather} from "./redux/weatherReducer";
import {AppRootStateType} from "./redux/store";
import localStorageService from "./localStorage";


const App = () => {
    const cities = ['Moscow', 'Minsk', 'Bratislava']

/*
    const weather = useSelector<AppRootStateType, CityWeather[]>((state) => state.weather.citiesWeather)
*/

    return (
        <div className="app-container">
            <Button variant="outlined">
                <NavLink className="app-header" to="/extended">Прогноз погоды на 5 дней</NavLink>
            </Button>
            <div className="app">
                {
                    cities.map(c =>
                        <Weather key={c} city={c}/>
                    )
                }
                <div>
                    <Routes>
                        <Route
                            path="/extended" element={<ExtendedWeather/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}


export default App;
