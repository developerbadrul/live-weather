import { useContext } from "react";
import { WeatherContext } from "../context";

const useWeather = () => {
    return useContext(WeatherContext)
};

export default useWeather;