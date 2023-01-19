import moment from "moment";
import { getImgSrcByCondition } from "../utils/conditions";

// WeatherApp Container Query
const weatherApp = document.querySelector(".weather-app");
const loader = document.querySelector(".loader");

let degreeSymbol;

export default class DomHandler {
    showDayData(data) {
        const allData = data;
        const dayData = data.days[0];

        const currentDayContainer = document.createElement("div");
        currentDayContainer.classList.add("current-day-content");

        const currentImgContainer = document.createElement("p");
        currentImgContainer.classList.add("curr-image-container");

        const image = document.createElement("img");
        // NEED A WAY TO TAP INTO IMAGES AND LINK THEIR PATHS HERE BASED ON DAY CONDITIONS.
        image.src = `${getImgSrcByCondition(dayData.icon)}`;

        image.alt = "Current day's weather condition icon";
        currentImgContainer.appendChild(image);

        const conditions = document.createElement("p");
        conditions.classList.add("conditions");
        conditions.textContent = `${dayData.conditions}`;

        const localeName = document.createElement("p");
        localeName.classList.add("locale-name");
        localeName.textContent = `${allData.resolvedAddress.toUpperCase()}`;

        const tempNow = document.createElement("p");
        tempNow.classList.add("temp-now");
        tempNow.textContent = `${dayData.temp} ${degreeSymbol}`;

        const tempHighLow = document.createElement("div");
        tempHighLow.classList.add("temp-high-low");

        const tempHigh = document.createElement("p");
        tempHigh.classList.add("temp-high");
        tempHigh.textContent = `${dayData.tempmax} ${degreeSymbol}`;

        const tempLow = document.createElement("p");
        tempLow.classList.add("temp-low");
        tempLow.textContent = `${dayData.tempmin} ${degreeSymbol}`;

        tempHighLow.appendChild(tempHigh);
        tempHighLow.appendChild(tempLow);

        const date = document.createElement("p");
        date.classList.add("date");
        date.textContent = moment().format("MMMM, Do YYYY");

        const time = document.createElement("p");
        time.classList.add("time");
        time.textContent = moment().format("LTS");

        currentDayContainer.appendChild(currentImgContainer);
        currentDayContainer.appendChild(conditions);
        currentDayContainer.appendChild(localeName);
        currentDayContainer.appendChild(tempNow);
        currentDayContainer.appendChild(tempHighLow);
        currentDayContainer.appendChild(date);
        currentDayContainer.appendChild(time);

        weatherApp.appendChild(currentDayContainer);
    }

    showUpcomingWeekData(data) {
        const upcomingDays = data.days;

        const theUpcomingWeek = document.createElement("div");
        theUpcomingWeek.classList.add("the-coming-week");

        // Loop 7x to get the next 7 days of data from the obj
        // Must tap into index starting at 1, otherwise, i = 0 returns current day.
        for (let i = 1; i < 8; i++) {
            const upcomingDay = document.createElement("div");
            upcomingDay.classList.add("upcoming", "day");

            const upcomingDayName = document.createElement("p");
            upcomingDayName.classList.add("upcoming-day-name");
            upcomingDayName.textContent = `${moment()
                .add(i, "d")
                .format("dddd")}`;

            const upcomingDayTempH = document.createElement("p");
            upcomingDayTempH.classList.add("upcoming-temp-high");
            upcomingDayTempH.textContent = `${upcomingDays[i].tempmax} ${degreeSymbol}`;

            const upcomingDayTempL = document.createElement("p");
            upcomingDayTempL.classList.add("upcoming-temp-low");
            upcomingDayTempL.textContent = `${upcomingDays[i].tempmin} ${degreeSymbol}`;

            const imgContainer = document.createElement("p");
            const img = document.createElement("img");
            img.src = `${getImgSrcByCondition(upcomingDays[i].icon)}`;
            img.alt = "Upcoming day of the week weather condition icon";
            imgContainer.appendChild(img);

            upcomingDay.appendChild(upcomingDayName);
            upcomingDay.appendChild(upcomingDayTempH);
            upcomingDay.appendChild(upcomingDayTempL);
            upcomingDay.appendChild(imgContainer);

            theUpcomingWeek.appendChild(upcomingDay);
        }

        weatherApp.appendChild(theUpcomingWeek);
    }

    showLoader() {
        loader.classList.remove("loader--hidden");
    }

    hideLoader() {
        loader.classList.add("loader--hidden");
    }

    clearDisplay() {
        weatherApp.textContent = "";
    }

    setDegreeSymbol(unitChosen) {
        return unitChosen === "us"
            ? (degreeSymbol = "°F")
            : (degreeSymbol = "°C");
    }
}
