
// this will ensure that function is called once all DOM elements of page ready to be used
$(function() {

// Constants and Variables to reference data and API Keys
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';
const API_KEY = 'aa63332b2cb399e810b8fbb149d7c92e';
let weatherData;

// Cached Element References
const $city = $('#city');
const $tempreture = $('#tempreture');
const $feels = $('#feels');
const $weather = $('#weather');
const $form = $('form');
const $input = $('input[type="text"]');

// Event Listener
$form.on('submit', handleGetData)

// function to get Data using javascript
function handleGetData(event) {

event.preventDefault();
// setting up input variable
const cityName = $input.val();
// this method is used to keep the input blank after input entered
$input.val("");
// ajax call request formated based on documentation added imperial for farenheit
$.ajax(`${BASE_URL}weather?q=${cityName}&units=imperial&appid=${API_KEY}`).then(function (data) {

 // `${BASE_URL}weather?q=${cityName}&units=imperial&appid=${API_KEY}`

weatherData = data;
// if successfull then render function is called from line 40
render();
// if an error than will console.log error
}, function (error) {
  console.log(error);
});

}

// function that will display the data requested in text
function render() {
  $city.text(weatherData.name); // city is .name
  $tempreture.text(weatherData.main.temp); // displaying main tempreture and on line 28 referencing imperial for farenheit
  $feels.text(weatherData.main.feels_like); // referencing feels_like per documentation
  $weather.text(weatherData.weather[0].description); //used indexing to get the first item in an array
}

});
