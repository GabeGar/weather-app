import { useWeather } from "./context/WeatherContext";

import Header from "./components/Header";
import LoadingSpinner from "./components/LoadingSpinner";
import SearchField from "./components/SearchField";
import TempSlider from "./components/TempSlider";
import Weather from "./components/Weather";
import CurrentDay from "./components/CurrentDay";
import TheComingWeek from "./components/TheComingWeek";

const App = () => {
    const { isLoading, weatherData } = useWeather();

    if (Object.keys(weatherData).length === 0 || isLoading)
        return <LoadingSpinner />;

    return (
        <div className="content-wrapper">
            <Header>
                <TempSlider />
                <SearchField />
            </Header>

            <Weather>
                <CurrentDay />
                <TheComingWeek />
            </Weather>
        </div>
    );
};

export default App;
