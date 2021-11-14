import React from 'react'
type WeatherDetailsType={
	city: string,
	descript: string,
	temperature:number,
	humidity:number,
	windSpeed: number
}
const WeatherDetails = (props:WeatherDetailsType) => {
	return(
		<div className="weather-details">
			<div className="city">{props.city}</div>
			<div className="temperature">{props.temperature} &deg; C</div>
			<div className="descript">{props.descript}</div>
			<div className="humidity">Влажность {props.humidity} %</div>
			<div className="windSpeed">Скорость ветра {props.windSpeed} м/c</div>
		</div>
	)
}


export default WeatherDetails
