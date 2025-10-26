function updateCurrentWeather(response) {
  let currentTemp = document.querySelector("#current-temperature-value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  apiKey = "25db17t7533c78o4da26332a44f6038e";
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(updateCurrentWeather);
}

function searchHandle(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-form-input");

  searchCity(searchElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchHandle);

searchCity("Kabul");
