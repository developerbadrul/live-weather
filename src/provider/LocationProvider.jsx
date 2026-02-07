import { useState } from "react";
import { LocationContex } from "../context";



const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: 0,
        longitude: 0,
    });
    return (
        <LocationContex.Provider value={{ selectedLocation, setSelectedLocation }}>
            {children}
        </LocationContex.Provider>
    );
};

export default LocationProvider;