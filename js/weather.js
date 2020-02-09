const weather = document.querySelector(".js-weather");
const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = 'coords';


function getWeather(lat, lng) {
    fetch(`api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units`
    ).then(function (response) {
        return response.json();
    })
        .then(function (json) {
            console.log(json);
            const temerature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temerature} @ ${place}`;

    });

}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}

function handleGeoSuccess(position) {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}
function handleGeoError() {
    console.log("Cant access geo location");
}

function askForCoords() {
    console.log("ask");
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);

}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();