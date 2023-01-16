const weatherAppId = "Q5SUE2QAE6NMSZHUXP3RQZ9DQ";

async function getWeatherData(locale) {
    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?key=${weatherAppId} `
        );
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// getWeatherData("Toronto");
