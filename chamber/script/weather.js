// OpenWeatherMap API Details
const apiKey = "84abe2a1c418a448c612f22a42350bb9";
const lat = 4.932418911023496;
const lon = 8.317070096106683;
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

// Members JSON Path
const membersUrl = "./data/member.json";

document.addEventListener("DOMContentLoaded", () => {
    // Run weather fetch only if #weather-info exists
    if (document.getElementById("weather-info")) {
        fetchWeather();
    }

    // Run spotlight fetch only if #spotlights exists
    if (document.getElementById("spotlights")) {
        fetchSpotlights();
    }

    // Display banner only if .banner exists
    if (document.querySelector(".banner")) {
        displayBanner();
    }
});

// Fetch and display weather data
async function fetchWeather() {
    const weatherInfo = document.getElementById("weather-info");
    if (!weatherInfo) {
        console.warn("Skipping fetchWeather: #weather-info not found.");
        return;
    }

    try {
        const response = await fetch(weatherUrl);
        if (!response.ok) throw new Error("Weather data not available");

        const data = await response.json();
        const temp = data.main.temp.toFixed(1);
        const description = data.weather[0].description;
        const formattedDesc = description.charAt(0).toUpperCase() + description.slice(1);
        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

        weatherInfo.innerHTML = `Weather: ${formattedDesc}, ${temp}°C <img src="${icon}" alt="Weather icon">`;
    } catch (error) {
        console.error("Weather fetch error:", error);
        weatherInfo.textContent = "Unable to fetch weather data.";
    }
}

// Fetch and display business spotlights (Silver & Gold members only)
async function fetchSpotlights() {
    const spotlightContainer = document.getElementById("spotlights");
    if (!spotlightContainer) {
        console.warn("Skipping fetchSpotlights: #spotlights not found.");
        return;
    }

    try {
        console.log("Fetching spotlights...");

        const response = await fetch(membersUrl);
        if (!response.ok) throw new Error("Failed to load members data");

        const data = await response.json();
        console.log("Members data:", data);

        const eligibleMembers = data.members.filter(member => 
            member.membership.toLowerCase() === "silver" || member.membership.toLowerCase() === "gold"
        );        

        if (eligibleMembers.length === 0) {
            console.warn("No Silver or Gold members available for spotlight.");
            return;
        }

        // Randomly select 2 or 3 spotlight members
        const selectedSpotlights = eligibleMembers.sort(() => Math.random() - 0.5).slice(0, 3);

        // Clear and add h3 heading before appending members
        spotlightContainer.innerHTML = "<h3> Business Spotlights </h3>";

        selectedSpotlights.forEach(member => {
            const div = document.createElement("div");
            div.classList.add("spotlight-card"); // Optional: For CSS styling
            div.innerHTML = `
             <img src=" ${member.image} " alt= "company logo "  loading="lazy">
                <h4>${member.name}</h4>
                <p>${member.email}</p>
                <p>${member.physical_address}</p>
            `;
            spotlightContainer.appendChild(div);
        });

        console.log("Spotlights added successfully.");
    } catch (error) {
        console.error("Spotlights fetch error:", error);
    }
}

// Display the banner only on Monday, Tuesday, and Wednesday
function displayBanner() {
    const banner = document.querySelector(".banner");
    if (!banner) {
        console.warn("Skipping displayBanner: .banner not found.");
        return;
    }

    const closeBtn = document.getElementById("close-banner");
    if (!closeBtn) {
        console.warn("Skipping displayBanner: #close-banner button not found.");
        return;
    }

    const today = new Date().getDay(); // 1 = Monday, 2 = Tuesday, 3 = Wednesday

    if (today >= 1 && today <= 3) {
        banner.style.display = "flex";
    } else {
        banner.style.display = "none";
    }

    closeBtn.addEventListener("click", () => {
        banner.style.display = "none";
    });
}
