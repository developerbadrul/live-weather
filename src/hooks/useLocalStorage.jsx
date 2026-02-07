import { useEffect, useState } from "react";

const useLocalStorage = (storageKey, defaultValue) => {
    const [value, setValue] = useState(
        JSON.parse(localStorage.getItem(storageKey)) ?? defaultValue
    );

    useEffect(() => {
        const cached = JSON.parse(localStorage.getItem(storageKey));

        if (JSON.stringify(cached) === JSON.stringify(value)) return;

        localStorage.setItem(storageKey, JSON.stringify(value))
    }, [value, storageKey])

    return [value, setValue]
};

export default useLocalStorage;