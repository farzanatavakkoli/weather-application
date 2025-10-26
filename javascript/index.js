function searchHandle(event) {
  event.preventDefault();
  let searchElement = document.querySelector("#search-form-input");
  let city = document.querySelector("#city");
  city.innerHTML = searchElement.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchHandle);
