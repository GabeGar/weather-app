import { createContext, useContext, useEffect, useState } from "react";

const WEATHER_APP_ID = "UEGJTYTRFBBZ7G9MRS9A78NAG";

const WeatherContext = createContext({
    weatherData: {},
    locale: "",
    tempUnitGroup: "",
    isLoading: false,
    hasError: false,
    setLocale: () => {},
    getWeatherData: () => {},
    setTempUnitGroup: () => {},
});

const WeatherContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState({});
    const [locale, setLocale] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // * TempUnitGroup is a string that can have one of two values --- 'metric' for celsius || 'us' for fahrenheit.
    const [tempUnitGroup, setTempUnitGroup] = useState("metric");

    const getWeatherData = async () => {
        if (locale.length <= 1) return;

        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?key=${WEATHER_APP_ID}&iconSet=icons2&unitGroup=${tempUnitGroup}`;

        try {
            setIsLoading(true);
            setHasError(false);

            const response = await fetch(url);

            if (!response.ok) throw new Error("Something went wrong");

            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setHasError(true);
        } finally {
            setIsLoading(false);
            setLocale("");
        }
    };

    const getTempWeatherData = async () => {
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/florida?key=${WEATHER_APP_ID}&iconSet=icons2&unitGroup=us`;

        try {
            setIsLoading(true);
            setHasError(false);

            const response = await fetch(url);

            if (!response.ok) throw new Error("Something went wrong");

            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setHasError(true);
        } finally {
            setIsLoading(false);
            setLocale("");
        }
    };

    useEffect(() => {
        getTempWeatherData();
    }, []);

    return (
        <WeatherContext.Provider
            value={{
                getWeatherData,
                locale,
                setLocale,
                tempUnitGroup,
                setTempUnitGroup,
                weatherData,
                isLoading,
                hasError,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

const useWeather = () => {
    const context = useContext(WeatherContext);
    return context;
};

export default WeatherContextProvider;
export { useWeather };
