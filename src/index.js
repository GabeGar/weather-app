import DomHandler from "./modules/domhandler.js";
import { clearSearchField } from "./utils/clearfield.js";
import { handleErrorMsg } from "./utils/errormessage.js";
import { timeOut } from "./utils/delay.js";

// Queries
const searchBtn = document.querySelector(".search");
const searchField = document.querySelector("#search-locale");
const loader = document.querySelector(".loader");

// Dom Class initialized
const domHandler = new DomHandler();

// Api-key
const weatherAppId = "Q5SUE2QAE6NMSZHUXP3RQZ9DQ";

// Main Function
async function getWeatherDataAndDisplay(e) {
    if (e.type === "click" || e.key === "Enter") {
        const locale = searchField.value;
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locale}?key=${weatherAppId}&iconSet=icons2&unitGroup=metric`;

        try {
            const response = await fetch(url);

            if (response.status !== 200) {
                handleErrorMsg(response);
                clearSearchField();
            } else {
                const data = await response.json();
                domHandler.clearDisplay();
                domHandler.showLoader();
                timeOut(1000).then(() => {
                    domHandler.hideLoader();
                    domHandler.showDayData(data);
                    domHandler.showUpcomingWeekData(data);
                    clearSearchField();
                });
            }
        } catch (err) {
            console.error(err);
        }
    } else {
        return;
    }
}

// Event Listeners
window.addEventListener("load", () => loader.classList.add("loader--hidden"));
searchField.addEventListener("keyup", getWeatherDataAndDisplay);
searchBtn.addEventListener("click", getWeatherDataAndDisplay);
