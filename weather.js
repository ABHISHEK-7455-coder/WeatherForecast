const apiKey = "b438f16eb0c75fd741e0afc7fb8a53e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const url = `${apiUrl}${'canada'}&appid=${apiKey}`;

const searchBox = document.querySelector('#search input');
const searchBtn = document.querySelector('#search button');
const icon = document.querySelector('#weather-icon')

async function WeatherForecast(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await res.json();
    

    console.log(data);
    document.querySelector('#city-name').innerHTML = data.name;
    document.querySelector('#temperature').innerHTML = data.main.temp + "<sup>o</sup>c";
    document.querySelector('#humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('#wind').innerHTML = data.wind.speed + "km/h";

    // if(data.weather[0].main == "clouds"){
    //     icon.src = "https://www.svgrepo.com/show/339074/cloudy-hazy.svg"
    // }
}

searchBtn.addEventListener("click", () => {
    WeatherForecast(searchBox.value);
})

