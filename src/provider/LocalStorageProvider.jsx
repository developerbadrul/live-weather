import { LocalStorageContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageProvider = ({ children }) => {
    const [favourite, setFavourite] = useLocalStorage('favourite', []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourite([
            ...favourite,
            {
                latitude: latitude,
                longitude: longitude,
                location: location,
            }
        ])
    }

    const removeFromFavourites = (location) => {
        const restFavourites = favourite.filter(fav => fav.location !== location)
        setFavourite(restFavourites)
    }

    const value = {
        favourite,
        addToFavourites,
        removeFromFavourites
    }

    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export default LocalStorageProvider