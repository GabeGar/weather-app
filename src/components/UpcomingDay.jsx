import { useWeather } from "../context/WeatherContext";
import { getImgSrcByCondition } from "../utilities/conditions";

const UpcomingDay = ({ numDay, dayName }) => {
    const { weatherData, tempUnitGroup } = useWeather();

    const upcomingDays = weatherData?.days;
    const degreeSymbol = tempUnitGroup === "metric" ? "°C" : "°F";

    return (
        <div className="upcoming day">
            <p className="upcoming-day-name">{dayName}</p>
            <p className="upcoming-temp-high">
                {`${upcomingDays[numDay].tempmax} ${degreeSymbol}`}
            </p>
            <p className="upcoming-temp-low">
                {`${upcomingDays[numDay].tempmin} ${degreeSymbol}`}
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
