import { useWeather } from "../context/WeatherContext";

const CELSIUS_UNIT_GROUP = "metric";
const FAHRENHEIT_UNIT_GROUP = "us";

const TempSlider = () => {
    const { tempUnitGroup, setTempUnitGroup } = useWeather();

    const handleChangeUnit = () => {
        tempUnitGroup === FAHRENHEIT_UNIT_GROUP
            ? setTempUnitGroup(CELSIUS_UNIT_GROUP)
            : setTempUnitGroup(FAHRENHEIT_UNIT_GROUP);
    };

    return (
        <div className="slider-container">
            <label className="switch" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={handleChangeUnit}
                    checked={tempUnitGroup === FAHRENHEIT_UNIT_GROUP}
                />
                <div className="slider round"></div>
            </label>
        </div>
    );
};

export default TempSlider;
