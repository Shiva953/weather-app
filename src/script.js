// First, perform the backend stuff
// 2. form input validation(take the city name)
// 3. then put the city name as the query param for the API call and fetch the data
// 4. Display the data in the DOM and then styling frontend stuff

const cityForm = document.getElementsByClassName("city-form")[0];
const cityInput = document.getElementById("cityname");
const api_key = process.env.API_KEY
const defaultCity = 'Copenhagen'

document.addEventListener("DOMContentLoaded", fetchWeatherData(defaultCity));

cityForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const cityName = cityInput.value;
    fetchWeatherData(cityName);
  });

async function fetchWeatherData(city){
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`) //fetching the promise and resolving it
    const data = await response.json(); //.json() converts response into json format and returns another promise, resolving it and then taking the final value(JSON object)
    DOMDisplay(data)
    }
    catch(err){
        alert('Incorrect Location.')
    }
}

function DOMDisplay(data){
    const condition = document.getElementsByClassName("condition")[0]
    const temperature = document.getElementsByClassName("temperature")[0]
    const city = document.getElementsByClassName("city-name")[0]
    const feelsLike = document.getElementById("feels-like")
    const humidity = document.getElementById("humidity")
    const rain = document.getElementById("chance-of-rain")
    const windSpeed = document.getElementById("wind-speed")
    feelsLike.innerHTML = data.current.feelslike_c + "°C";
    humidity.textContent = data.current.humidity + "%";
    rain.textContent = data.current.precip_in + "%";
    windSpeed.textContent = data.current.gust_mph + "mph";

    condition.textContent = data.current.condition.text;
    temperature.textContent = data.current.temp_c + '°C';
    city.textContent = data.location.name + ", " + data.location.region;

}