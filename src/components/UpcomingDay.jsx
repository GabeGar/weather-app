import { useWeather } from "../context/WeatherContext";
import { tempConverter } from "../utilities/tempConverter";
import { getImgSrcByCondition } from "../utilities/weatherConditions.js";

const UpcomingDay = ({ numDay, dayName }) => {
    const { weatherData, currentTempUnit, showConversion } = useWeather();
    const tempUnit = currentTempUnit === "us" ? "°F" : "°C";
    const upcomingDays = weatherData?.days;

    return (
        <div className="upcoming day">
            <p className="upcoming-day-name">{dayName}</p>
            <p className="upcoming-temp-high">
                {!showConversion && `${upcomingDays[numDay].tempmax}`}
                {showConversion &&
                    `${tempConverter(
                        upcomingDays[numDay].tempmax,
                        currentTempUnit
                    )}`}
                {tempUnit}
            </p>
            <p className="upcoming-temp-low">
                {!showConversion && `${upcomingDays[numDay].tempmin}`}
                {showConversion &&
                    `${tempConverter(
                        upcomingDays[numDay].tempmin,
                        currentTempUnit
                    )}`}
                {tempUnit}
            </p>
            <p>
                <img
                    src={`${getImgSrcByCondition(upcomingDays[numDay].icon)}`}
                    alt="Upcoming day of the week weather condition icon"
                />
            </p>
        </div>
    );
};

export default UpcomingDay;
