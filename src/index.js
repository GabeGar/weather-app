import DomHandler from "./modules/domhandler.js";
import { clearSearchField } from "./util/clearfield.js";
import { handleErrorMsg } from "./util/errormessage.js";

// Document Queries
const searchBtn = document.querySelector(".search");
const searchField = document.querySelector("#search-locale");

// Dom Class obj initialized
const domHandler = new DomHandler();

// Api-key
const weatherAppId = "Q5SUE2QAE6NMSZHUXP3RQZ9DQ";

// Main Function
async function getWeatherDataAndDisplay() {
    const locale = searchField.value;

    try {
        const response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?key=${weatherAppId}&iconSet=icons1&unitGroup=metric`
        );

        if (response.status !== 200) {
            handleErrorMsg(response);
            clearSearchField();
        } else {
            const data = await response.json();
            console.log(data);
            domHandler.showDayData(data);
            domHandler.showUpcomingWeekData(data);
            clearSearchField();
        }
    } catch (err) {
        console.error(err);
    }
}

// Event Listeners
searchBtn.addEventListener("click", getWeatherDataAndDisplay);
