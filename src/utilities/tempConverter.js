const tempConverter = (temp, currentUnit) => {
    // * To Fahrenheit
    if (currentUnit === "metric") {
        return Math.round((temp - 32) * (5 / 9), 2);
    }

    // * To Celsius
    if (currentUnit === "us") {
        return Math.round(temp * (9 / 5) + 32, 2);
    }
};

export { tempConverter };
