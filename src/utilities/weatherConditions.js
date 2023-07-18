const getImgSrcByCondition = (cond) => {
    const filePath = "dist/icons/";

    const conditions = {
        snow: "snow",
        "snow-showers-day": "snow-showers-day",
        "snow-showers-night": "snow-showers-night",
        "thunder-rain": "thunder-rain",
        "thunder-showers-day": "thunder-showers-day",
        "thunder-showers-night": "thunder-showers-night",
        rain: "rain",
        "showers-day": "showers-day",
        "showers-night": "showers-night",
        fog: "fog",
        wind: "wind",
        cloudy: "cloudy",
        "partly-cloudy-day": "partly-cloudy-day",
        "partly-cloudy-night": "partly-cloudy-night",
        "clear-day": "clear-day",
        "clear-night": "clear-night",
    };

    if (cond === conditions[cond]) {
        return `${filePath}${conditions[cond]}.png`;
    }
};

export { getImgSrcByCondition };
