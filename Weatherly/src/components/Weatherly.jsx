import React, { useEffect, useRef, useState } from 'react';
import './Weatherly.css';
import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';
import rain_icon from '../assets/rain.png'; 
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';

const Weatherly = () => {
    const inputRef = useRef();
    const [weatherData, setWeatherData] = useState(false);

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    };

    const search = async (city) => {
        if (!city.trim()) {
            alert("Please enter a valid city name.");
            return;
        }
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                alert(data.message);
                return;
            }

            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            });
        } catch (error) {
            setWeatherData(false);
            console.error("Error while fetching weather data.");
        }
    };

    useEffect(() => {
        search("Colombo");
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            search(inputRef.current.value);
        }
    };

    return (
        <div className="weather">
            <div>
                <h1 className="heading_txt">Weatherly</h1>
            </div>
            <div className="weather__search-bar">
                <input ref={inputRef} type="text" placeholder="Enter a City Name" onKeyDown={handleKeyDown} />
                <div className="search_btn" onClick={() => search(inputRef.current.value)}>
                    <img src={search_icon} alt="Search" />
                </div>
            </div>
            {weatherData && (
                <>
                    <img src={weatherData.icon} alt="Weather Icon" className="weather__icon" />
                    <p className="temperature">{weatherData.temperature}°C</p>
                    <p className="location">{weatherData.location}</p>
                    <div className="weather__data">
                        <div className="col">
                            <img src={humidity_icon} alt="Humidity" />
                            <div>
                                <p>{weatherData.humidity} %</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind_icon} alt="Wind Speed" />
                            <div>
                                <p>{weatherData.windSpeed} Km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Weatherly;
