function getWeather() {
    const apiKey = '9fc78bc227fe34244df2154c6248af99' // Replace with your API key
    const city = document.getElementById('cityInput').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            const weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherData = document.getElementById('weatherData');
            weatherData.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
        });
}
