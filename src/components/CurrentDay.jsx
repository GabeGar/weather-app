import { useWeather } from "../context/WeatherContext";
import { getImgSrcByCondition } from "../utilities/weatherConditions.js";
import { tempConverter } from "../utilities/tempConverter";
import moment from "moment";

import MomentClock from "./MomentClock";
import { useEffect } from "react";

const CurrentDay = () => {
    const { weatherData, currentTempUnit, showConversion } = useWeather();
    const tempUnit = currentTempUnit === "us" ? "°F" : "°C";

    const dayData = weatherData?.days[0];

    useEffect(() => {
        document.querySelector("link").href = getImgSrcByCondition(
            weatherData?.currentConditions?.icon
        );
    }, [weatherData?.currentConditions?.icon]);

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
            <p className="temp-now">
                {!showConversion && `${dayData?.temp}`}
                {showConversion &&
                    tempConverter(dayData?.temp, currentTempUnit)}
                {tempUnit}
            </p>
            <div className="temp-high-low">
                <p className="temp-high">
                    {!showConversion && `${dayData?.tempmax}`}
                    {showConversion &&
                        tempConverter(dayData?.tempmax, currentTempUnit)}
                    {tempUnit}
                </p>
                <p className="temp-low">
                    {!showConversion && `${dayData?.tempmin}`}
                    {showConversion &&
                        tempConverter(dayData?.tempmin, currentTempUnit)}
                    {tempUnit}
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
