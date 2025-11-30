import { useState } from "react";
import { LocalStorageContext } from "../context";


const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0,
    });
    return (
        <LocalStorageContext.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export default LocationProvider;