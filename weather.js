const weather = document.querySelector(".js-weather");
const COORDS = 'coords';
const API_KEY = "9be9ab67b44cf43dd31a08a0cdf0f363";

function getWeather(lat, lng){
   fetch(
       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
   ).then(function(response){
       return response.json()
       //fetch가 다 끝나고 이 function을 실행하는 것을 보장함
   }).then(function(json){
       const temperature = json.main.temp;
       const place = json.name;
       weather.innerHTML = `${temperature} @ ${place}`;
   })
}
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        /*
        latitude: latitude,
        longitude: longitude
        객체의 변수명과 key명이 같을 때엔 아래처럼 할 수 있다.
        */
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Cant access geo location');
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();