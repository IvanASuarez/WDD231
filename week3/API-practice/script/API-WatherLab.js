const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

const myLat = "49.75";
const myLong = "6.64";
const myKey = "cb5000a33ef342b279a2c20b4b0837c9";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
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

function displayData(data){
    myTown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp} °C`;
    const iconsrc =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);

}

apiFetch();