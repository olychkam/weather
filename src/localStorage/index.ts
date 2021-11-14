import {CityWeather} from "../redux/weatherReducer";


const localStorageService = {
    setCities: (cities: CityWeather[]) => {
        if(cities){
            localStorage.setItem('weatherCities', JSON.stringify(cities))  
        } 
    },

    getCities: () => {
        const cities = localStorage.getItem('weatherCities')
        
        if(cities && cities.length){
            return JSON.parse(cities)
        }

        return null
    }
}

export default localStorageService