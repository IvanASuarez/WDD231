const graphic = document.querySelector('#weather-icon');
const myDescription = document.querySelector('#description');
const nextDays = document.querySelector('#forecast-container');

const myLat = 4.70;
const myLong =-74.07
const myKey = "cb5000a33ef342b279a2c20b4b0837c9";


async function fetchCurrentWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}

async function fetchForecast(){
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayNextDays(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }   
}


function displayData(data){
    myDescription.innerHTML = "" ;


    myDescription.innerHTML = `
    <li><strong>${data.main.temp}</strong> °C </li>
    <li>${data.weather[0].main}</li>
    <li> High:${data.main.temp_max}°</li>
    <li> Low: ${data.main.temp_min}°</li>
    <li> Humidity: ${data.main.humidity} %</li>
    <li> Sunrise: ${new Date (data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'})} </li>
    <li> Sunset: ${new Date (data.sys.sunset * 1000).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
    `
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    graphic.setAttribute('src', iconsrc);
    graphic.setAttribute('atl', data.weather[0].description);

}

function displayNextDays(data){
    nextDays.innerHTML = "";

    const filtered = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0,3);

    filtered.forEach((day, index) => {
        const date = new Date(day.dt * 1000);
        const temp = day.main.temp.toFixed(1);
        const dayName = index === 0 ? "Today" : date.toLocaleDateString('en-US',{weekday: 'long'});
        
        nextDays.innerHTML += `
            <li> ${dayName}: <strong> ${temp} </strong> °C </li>
        `;
    });
}

fetchCurrentWeather();
fetchForecast();

