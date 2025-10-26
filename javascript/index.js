function updateCurrentWeather(response) {
  let currentTemp = document.querySelector("#current-temperature-value");
  currentTemp.innerHTML = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${response.data.wind.speed}km/h`;

  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = formatDate(date);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day} ${hours}:${minutes}`;
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
