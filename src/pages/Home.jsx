import Header from "../components/Header/Header";
import WeatherBoard from "../components/Weather/WeatherBoard";
import useWeather from "../hooks/useWeather";

const Home = () => {
    const { loading, error, requestBrowserLocation } = useWeather();

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
            <div className="grid place-items-center h-screen">
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