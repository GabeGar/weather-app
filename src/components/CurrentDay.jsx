import { useWeather } from "../context/WeatherContext";
import { getImgSrcByCondition } from "../utilities/conditions";
import moment from "moment";

import MomentClock from "./MomentClock";

const CurrentDay = () => {
    const { weatherData, tempUnitGroup } = useWeather();

    const dayData = weatherData?.days[0];
    const degreeSymbol = tempUnitGroup === "metric" ? "°C" : "°F";

    return (
        <div className="current-day-content">
            <p className="current-image-container">
                <img
                    src={`${getImgSrcByCondition(
                        weatherData?.currentConditions?.icon
                    )}`}
                    alt="Current day's weather condition icon"
                />
            </p>
            <p className="conditions">
                {weatherData?.currentConditions?.conditions}
            </p>
            <p className="locale-name">
                {`${weatherData?.resolvedAddress?.toUpperCase()}`}
            </p>
            <p className="temp-now">{`${dayData?.temp} ${degreeSymbol}`}</p>
            <div className="temp-high-low">
                <p className="temp-high">
                    {`${dayData?.tempmax} ${degreeSymbol}`}
                </p>
                <p className="temp-low">
                    {`${dayData?.tempmin} ${degreeSymbol}`}
                </p>
                <p className="date">{moment().format("ddd, MMMM Do, YYYY")}</p>
                <div className="time">
                    <MomentClock />
                </div>
            </div>
        </div>
    );
};

export default CurrentDay;
