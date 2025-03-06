import React from 'react'
import './Weatherly.css'
import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png' 
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'

const Weatherly = () => {
    return (
      
        <div className="weather">
            <div>
               <h1 className="heading_txt" >Weatherly</h1> 
            </div>
        
        <div className="weather__search-bar">
            <input type="text" placeholder="Enter a City Name" />
                <div className="search_btn">
                    <img src={search_icon} alt=""/>
            </div>
        </div>

        
            <img src={rain_icon} alt="" className = "weather__icon" />
            <p className="temperature">16°C</p>
            <p className="location">London</p>

            <div className="weather__data">
                <div className="col">
                    <img src={humidity_icon} alt="" />
                    <div>
                        <p>91%</p>
                        <span>Humidity</span>
                    </div>
                </div>
                <div className="col">
                    <img src={wind_icon} alt="" />
                    <div>
                        <p>3.6 Km/h</p>
                        <span>Wind Speed</span>
                    </div>
                </div>              
            </div>  
        
          
          
    </div>
  )
}

export default Weatherly
