import useWeather from "../../hooks/useWeather";
import { getFormattedDate } from "../../utils/date-utils";
import PinIcon from "./../../assets/pin.svg";
import ClimateDynamicIcon from "./ClimateDynamicIcon";



const WeatherHeadline = () => {
    const { weatherData } = useWeather();
    const { climate, location, temperature, time } = weatherData;



    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <ClimateDynamicIcon climate={climate} />

                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
                        {Math.round(temperature) ?? "--"}°
                    </h1>

                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinIcon} alt="pin" />
                        <h2 className="text-2xl lg:text-[50px]">
                            {location || "Unknown"}
                        </h2>
                    </div>
                </div>
            </div>

            <p className="text-sm lg:text-lg">
                {getFormattedDate(time, "time", false)} -{" "}
                {getFormattedDate(time, "date", false)}
            </p>
        </div>
    );
};

export default WeatherHeadline;
