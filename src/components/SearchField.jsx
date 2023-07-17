import { useWeather } from "../context/WeatherContext";

import ErrorMessage from "./ErrorMessage";
import SearchIcon from "./SearchIcon";

const SearchField = () => {
    const { locale, setLocale, hasError, getWeatherData } = useWeather();

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherData();
    };

    return (
        <form className="search-field" onSubmit={handleSubmit}>
            <input
                type="text"
                name="search-locale"
                id="search-locale"
                placeholder="Enter Locale"
                value={locale}
                onChange={(e) => setLocale(e.target.value)}
            />
            <SearchIcon />
            {hasError && <ErrorMessage />}
        </form>
    );
};

export default SearchField;
