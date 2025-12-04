import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";
import useWeather from "../hooks/useWeather";

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/sunny.jpg";
import ThunderStormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

const Home = () => {
    const { loading, error, requestBrowserLocation, weatherData } = useWeather();

    function getBackgroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return ScatterdCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderStormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;
            default:
                return ClearSkyImage;
        }
    }

    const dynamicBg = getBackgroundImage(weatherData.climate)

    if (loading.state) {
        return (
            <div className="grid place-items-center h-screen">
                <p className="text-3xl text-emerald-500 font-semibold">
                    {loading.message}
                </p>
            </div>
        );
    }

    // console.log(error);

    if (error?.includes("permission")) {
        return (
            <div className="grid place-items-center h-screen text-center">
                <p className="text-xl text-red-500 mb-5">{error}</p>
                <button
                    onClick={requestBrowserLocation}
                    className="px-6 py-3 rounded-lg bg-emerald-500 text-white text-lg"
                >
                    Allow Location
                </button>
            </div>
        );
    }


    return (

        loading.state ? (
            <div className="grid place-items-center h-screen">
                <p className="text-3xl text-emerald-500 font-semibold">{loading.message}</p>
            </div>
        ) : (
            <div style={{ backgroundImage: `url(${dynamicBg})` }} className="grid place-items-center h-screen bg-no-repeat bg-cover">
                <Header />
                <main>
                    <section>
                        <WeatherBoard />
                    </section>
                </main>
            </div>
        )
    );
};

export default Home;