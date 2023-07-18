import snow from "../assets/icons/snow.png";
import snowShowersDay from "../assets/icons/snow-showers-day.png";
import snowShowersNight from "../assets/icons/snow-showers-night.png";
import thunderRain from "../assets/icons/thunder-rain.png";
import thunderShowersDay from "../assets/icons/thunder-showers-day.png";
import thunderShowersNight from "../assets/icons/thunder-showers-night.png";
import rain from "../assets/icons/rain.png";
import showersDay from "../assets/icons/showers-day.png";
import showersNight from "../assets/icons/showers-night.png";
import fog from "../assets/icons/fog.png";
import wind from "../assets/icons/wind.png";
import cloudy from "../assets/icons/cloudy.png";
import partlyCloudyDay from "../assets/icons/partly-cloudy-day.png";
import partlyCloudyNight from "../assets/icons/partly-cloudy-night.png";
import clearDay from "../assets/icons/clear-day.png";
import clearNight from "../assets/icons/clear-night.png";

const getImgSrcByCondition = (cond) => {
    const conditions = {
        snow: snow,
        "snow-showers-day": snowShowersDay,
        "snow-showers-night": snowShowersNight,
        "thunder-rain": thunderRain,
        "thunder-showers-day": thunderShowersDay,
        "thunder-showers-night": thunderShowersNight,
        rain: rain,
        "showers-day": showersDay,
        "showers-night": showersNight,
        fog: fog,
        wind: wind,
        cloudy: cloudy,
        "partly-cloudy-day": partlyCloudyDay,
        "partly-cloudy-night": partlyCloudyNight,
        "clear-day": clearDay,
        "clear-night": clearNight,
    };

    return `${conditions[cond]}`;
};

export { getImgSrcByCondition };
