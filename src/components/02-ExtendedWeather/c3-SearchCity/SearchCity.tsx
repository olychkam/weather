import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import './SearchCity.css';
import {Button, Input} from "@material-ui/core";
import {addCityWeather, addCityWeatherThunk, CityWeather} from "../../../redux/weatherReducer";


export const SearchCity = () => {
    const [value, setValue] = useState<string>('')

    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const onClick = async (values?: string) => {
        if (value) {
            const city = await dispatch(addCityWeatherThunk(values ? values : value) as unknown as CityWeather)
            if (city) {
                setValue('')
                return
            }
        } else {
            console.log('error')
        }
    };
    return (
        <div className='searchWrapper'>
            <Input value={value} onChange={onChangeHandler} type="text"/>
            <Button onClick={() => onClick()}>Find</Button>
        </div>
    );
};
