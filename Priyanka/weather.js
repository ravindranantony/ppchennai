// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const API_KEY = '460b62b744dc4ec972fea55a01e2741a';

function getWeather() {
    const cityName = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === 200) {
                const { name, main, weather } = data;
                const { temp, humidity } = main;
                const { description, icon } = weather[0];

                weatherInfo.innerHTML = `
                    <h2>${name}</h2>
                    <p>Temperature: ${temp}°C</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Description: ${description}</p>
                    <img src="https://openweathermap.org/img/w/${icon}.png" alt="${description}">
                `;
            } else {
                weatherInfo.innerHTML = '<p>City not found. Please try again.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}