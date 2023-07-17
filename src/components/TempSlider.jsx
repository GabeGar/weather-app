import { useWeather } from "../context/WeatherContext";

const TempSlider = () => {
    const { currentTempUnit, setCurrentTempUnit, setShowConversion } =
        useWeather();

    const handleChangeUnit = () => {
        setCurrentTempUnit((tempUnit) => (tempUnit === "us" ? "metric" : "us"));
        setShowConversion((show) => !show);
    };

    return (
        <div className="slider-container">
            <label className="switch" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={handleChangeUnit}
                    defaultChecked={currentTempUnit === "us"}
                />
                <div className="slider round"></div>
            </label>
        </div>
    );
};

export default TempSlider;
