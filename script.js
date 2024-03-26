function getWeather() {
    const apiKey = '9fc78bc227fe34244df2154c6248af99'; // Replace with your API key
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
          
            document.getElementById('name').innerHTML="Weather in "+data.name
            document.getElementById('temp').innerHTML=data.main.temp+"°C"
            document.getElementById('desc').innerHTML=data.weather[0].description
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherCard = document.getElementById('weatherCard');
            weatherCard.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
        });
}
