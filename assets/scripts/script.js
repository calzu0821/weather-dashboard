// Created variables for the API call.
const APIkey = "5e7c300090fc006e727aed7871c6a2eb";
var city;

// Constructed a Query URL to make the API call. Used string concatenation to do this.
var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

// Make the API call using fetch
fetch(queryURL)
