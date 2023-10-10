const API_KEY = "214d420c957e08b7ffd7053b2c573b98";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.main.temp}°C     ${data.weather[0].main}`
    });
}

function onGeoError() {
    alert("I can't load your location...");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
