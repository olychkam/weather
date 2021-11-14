import axios from "axios";
import {homeWeatherStateType} from "../redux/type";


const apiKey = '4551927ed89918c0f0992a61b88ea970'
const instance = axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5",
});

export const weatherAPI = {
    getWeather(city: string, setData: any) {
        return instance.get<homeWeatherStateType>(`/weather?q=${city}&appid=${apiKey}&units=metric`)
    },
    getWeatherByCity(city: string) {
        return instance.get(`/forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(r => r.data)
    }
}