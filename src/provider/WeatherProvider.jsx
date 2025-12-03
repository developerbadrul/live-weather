import { useCallback, useContext, useEffect, useState } from "react";
import { LocationContex, WeatherContext } from "../context";

const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({
        location: "",
        climate: "",
        temperature: "",
        maxTemperature: "",
        minTemperature: "",
        humidity: "",
        cloudPercentage: "",
        wind: "",
        time: "",
        longitude: "",
        latitude: "",
    });
    const [loading, setLoading] = useState({ state: false, message: "" });
    const [error, setError] = useState(null);
    const { selectedLocation } = useContext(LocationContex)

    const fetchWeatherData = useCallback(async (lat, lon) => {
        try {
            setError(null)
            setLoading({
                state: true,
                message: "Fetching weather data..."
            })

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_API_KEY
                }&units=metric`)

            if (!response.ok) {
                const errorMessage = `Fetching weather data failed: ${response.status}`;
                throw new Error(errorMessage)
            }

            const data = await response.json()

            setWeatherData({
                location: data?.name,
                climate: data?.weather[0]?.main,
                temperature: data?.main?.temp,
                maxTemperature: data?.main?.temp_max,
                minTemperature: data?.main?.temp_min,
                humidity: data?.main?.humidity,
                cloudPercentage: data?.clouds?.all,
                wind: data?.wind?.speed,
                time: data?.dt,
                longitude: lon,
                latitude: lat,
            });


        } catch (error) {
            setError(error)
        } finally {
            setLoading({
                state: false,
                message: "",
            });
        }
    }, [])

    useEffect(() => {
        console.log('effect execute');
        
        setLoading({ state: true, message: "Finding location..." });
        if (selectedLocation.latitude && selectedLocation.longitude) {
            // console.log(selectedLocation.location, "Current Location"); 
            
            fetchWeatherData(
                selectedLocation.latitude,
                selectedLocation.longitude
            );
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                fetchWeatherData(position.coords.latitude, position.coords.longitude);
            })
        }
    }, [selectedLocation.latitude, selectedLocation.longitude, fetchWeatherData])

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;