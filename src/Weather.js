import React, { useState } from 'react'

function Weather() {
    const APIKEY = "c6787fa1902e4e64b8b153723230904"
    const [cityName, setCityName] = useState("CityName")
    const [temp, setTemp] = useState("30C")
    const [city, setCity] = useState("")
    const [maxTemp, setMaxTemp]  = useState("")
    const [minTemp, setMinTemp] = useState("")
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}`;

    const getWeather = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setCityName(data.location.name)
        setTemp(data.current.temp_c)
        setMaxTemp(data.forecast.forecastday[0].day.maxtemp_c)
        setMinTemp(data.forecast.forecastday[0].day.mintemp_c)
    }

    return (
        <div className='weather'>
            <span className='title'>Weather App</span>
            <br />
            <br />
            <input
                type="text"
                name="city"
                placeholder="Enter city name"
                onChange={(e) => {
                    setCity(e.target.value);
                 }} 
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <button className="getweather" onClick={() => { getWeather() }}>Submit</button>
            <br />
            <br />
            <div>
                <p>City Name: {cityName}</p>
                <p>Temp: {temp}</p>
            </div>
            <div>
                <p>Forecasted Temperature</p>
                <p>Max Temperature: {maxTemp}</p>
                <p>Min Temperature: {minTemp}</p>
            </div>
        </div>
    );
}
export default Weather
