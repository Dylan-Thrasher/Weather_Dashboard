const cityEl = document.querySelector('.form-input');
const enterEl = document.querySelector('#search');
const APIKey = "bc4b56299d21aec4bb34ccdca89fbde5";
let city = 'atlanta';

const queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}`;


function getCityWeatherData() {
    fetch(queryURL).then(response => response.json()).then(response => {
        debugger;
        console.log(response);
    });
console.log("true")
event.preventDefault()
}

enterEl.addEventListener('click', getCityWeatherData);