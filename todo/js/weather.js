const API_KEY = "9467efa40e2106d938e0391407671847"
function onGeoSucess(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live it ${lat} ${lon}` );
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log(url);
    // call the url -> fetch
    fetch(url).then(response => response.json().then(data =>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        const name = data.name;
        const weather = data.weather[0].main;
        weatherContainer.innerText = `${weather} / ${data.main.temp}`
        city.innerText = name;
    })); // wetube course
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

// openweathermap.org
// API call
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric
