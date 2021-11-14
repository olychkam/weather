export type weatherType = {
    id: number|null
    main: string
    description: string
    icon: string
}[]
export type mainType = {
    temp: number
    feels_like: number|null
    temp_min: number|null
    temp_max: number|null
    pressure: number|null
    humidity: number
}
export type windType = {
    speed: number|null
    deg: number|null
}
export type cloudsType = {
    all: number|null
}
export type sysType = {
    type: number|null
    id: number|null
    country: string,
    sunrise: number|null
    sunset: number|null
}

export type homeWeatherStateType = {
    weather: weatherType
    main: mainType
    wind: windType
    clouds: cloudsType
    dt: number|null
    sys: sysType
    timezone: number|null
    id: number|null
    name: string
    cod: number|null
}
