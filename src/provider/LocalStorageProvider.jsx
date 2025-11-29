import { LocalStorageContext } from "../context";
import useLocalStorage from "../hooks/useLocalStorage";

const LocalStorageProvider = ({ children }) => {
    const [favourite, setFavourite] = useLocalStorage('favourite', []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourite(prev => {

            const exists = prev.some(fav => fav.latitude === latitude && fav.longitude === longitude);
            console.log(exists);

            if (exists) return prev;

            return [
                ...prev,
                {
                    latitude: latitude,
                    longitude: longitude,
                    location: location,
                }
            ]
        })
    }

    const removeFromFavourites = (latitude, longitude) => {
        setFavourite(prev => (
            prev.filter(fav => !(fav.latitude === latitude && fav.longitude === longitude))
        ))
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