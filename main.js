const userAgent = navigator.userAgent;
if (userAgent.indexOf("Chrome") !== -1) {
    console.log("User is using Chrome.");
}

const date = new Date();

const newDate = date.toDateString();

const time = date.toLocaleTimeString();

console.log('Date:', newDate);
console.log('Time:', time);


//  * Generates an emoji-based weather forecast.
//  * @param {string} condition - The weather condition (e.g., "sunny", "rainy", "cloudy").
//  * @returns {string} A string of emojis representing the weather.
//  */
function weatherForecast(condition) {
    switch (condition.toLowerCase()) {
        case "sunny":
            return "☀️🌞";
        case "cloudy":
            return "☁️🌥️";
        case "rainy":
            return "🌧️☔";
        case "snowy":
            return "❄️⛄";
        case "stormy":
            return "⛈️🌩️";
        default:
            return "🤷‍♂️🌦️"; // For unknown conditions
    }
}
const currentWeather = "sunny";
const forecastEmojis = weatherForecast(currentWeather);

const weather = `Today's weather: ${forecastEmojis}`;

const box = document.querySelector(".socials")
box.insertAdjacentHTML("beforeend", weather);
