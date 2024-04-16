const apiKey = '917a318f4cae421b88804519241604'; // API key
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`; // Location is London

// Fetch weather data from API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    const weatherInfoElements = document.querySelectorAll('.weatherInfo');

    // Extract relevant data from JSON response
    const location = data.location.name;
    const temperature = data.current.temp_c;
    const weatherDescription = data.current.condition.text;

    // data template to be displayed
    const weatherData = `
      <div class="weather-output">
        <h2>Current Weather in ${location}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Condition: ${weatherDescription}</p>
        <pre><code>${JSON.stringify(data, null, 2)}</code></pre>
      </div>
    `;

    weatherInfoElements.forEach((element) => {
      element.innerHTML = weatherData;
    });
  })
  .catch((error) => {
    console.error(
      'There was an error fetching or parsing the weather data:',
      error
    );
  });
