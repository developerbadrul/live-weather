import { useContext } from "react";
import HeartIcon from "./../../assets/heart.svg";
import RedHeartIcon from "./../../assets/heart-red.svg";
import { LocalStorageContext } from "../../context";
import useWeather from "../../hooks/useWeather";
const AddToFavourite = () => {
    const {
        favourite,
        addToFavourites,
        removeFromFavourites
    } = useContext(LocalStorageContext)

    const { weatherData } = useWeather()

    const { latitude, longitude, location } = weatherData;

    const isFavourite = favourite.some(
        fav =>
            fav.latitude === latitude && fav.longitude === longitude
    )


    const handleToggleFavourite = () => {
        if (!latitude || !longitude) return;

        if (isFavourite) {
            removeFromFavourites(latitude, longitude);
        } else {
            addToFavourites(latitude, longitude, location)
        }
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
                    onClick={handleToggleFavourite}
                >
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? RedHeartIcon : HeartIcon} alt={isFavourite} />
                </button>

            </div>
        </div>
    );
};

export default AddToFavourite;