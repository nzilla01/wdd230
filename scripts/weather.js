// Fetch and display weather data
const apiKey = "84abe2a1c418a448c612f22a42350bb9";
const lat = "4.932418911023496";
const lon = "8.317070096106683";
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

document.addEventListener("DOMContentLoaded", () => {
    fetchWeather();
    fetchLinks();
});

async function fetchWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error("Weather data not available");
        const data = await response.json();
        
        const temp = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        
        document.getElementById("weather-info").innerHTML = `Weather: ${description}, ${temp}°C <img src="${icon}" alt="Weather icon">`;
    } catch (error) {
        console.error("Weather fetch error:", error);
    }
}

// Fetch and display dynamic links
async function fetchLinks() {
    const linksUrl = "./data/links.json";
    try {
        const response = await fetch(linksUrl);
        if (!response.ok) throw new Error("Links data not found");
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Links fetch error:", error);
    }
}

function displayLinks(weeks) {
    const activityList = document.getElementById("activity-list");
    activityList.innerHTML = ""; // Clear existing content
    weeks.forEach(week => {
        let listItem = document.createElement("li");
        listItem.textContent = week.week + ": ";
        week.links.forEach(link => {
            let anchor = document.createElement("a");
            anchor.href = link.url;
            anchor.textContent = link.title;
            anchor.style.marginRight = "10px";
            listItem.appendChild(anchor);
        });
        activityList.appendChild(listItem);
    });
}
