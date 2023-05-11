$(document).ready(function () {

    //clear history button function from localstorage
    let clearHistory = document.getElementById('clear-history');
    clearHistory.onclick = function() {
    localStorage.clear();
    clearSearchHistoryUI();
    };

    function clearSearchHistoryUI() {
        let cityElements = [cityOne, cityTwo, cityThree, cityFour, cityFive, citySix, citySeven, cityEight];
        cityElements.forEach((city) => {
        city.textContent = "";
        });
      }

    //declaring variables and looping the local storage to the UI
    let cityOne = document.getElementById('city-1')
    let cityTwo = document.getElementById('city-2')
    let cityThree = document.getElementById('city-3')
    let cityFour = document.getElementById('city-4')
    let cityFive = document.getElementById('city-5')
    let citySix = document.getElementById('city-6')
    let citySeven = document.getElementById('city-7')
    let cityEight = document.getElementById('city-8')
    
    let history = JSON.parse(localStorage.getItem("history"));

    if (history !== null && history !== undefined) {
    for (let i = 0; i < history.length; i++) {
    let city = document.getElementById(`city-${i+1}`);
      city.onclick = function() {
      searchWeather(history[i]);
    };
    if (history.length > 0) cityOne.textContent = history[0];
    if (history.length > 1) cityTwo.textContent = history[1];
    if (history.length > 2) cityThree.textContent = history[2];
    if (history.length > 3) cityFour.textContent = history[3];
    if (history.length > 4) cityFive.textContent = history[4];
    if (history.length > 5) citySix.textContent = history[5];
    if (history.length > 6) citySeven.textContent = history[6];
    if (history.length > 7) cityEight.textContent = history[7];
  }
}

 //function to save the user input as a search value
 $("#search-button").on("click", function(){
    var searchValue = $("#search-value").val();
    console.log(searchValue);
    $("#search-value").val("");
    saveSearchHistory(searchValue);
    searchWeather(searchValue);
    
});

    //function that saves search history to local storage
    function saveSearchHistory(searchValue) {
        let searchHistory = JSON.parse(localStorage.getItem("history")) || [];
        searchHistory.push(searchValue);
        localStorage.setItem("history", JSON.stringify(searchHistory));

        // update the city elements on the UI
        let cityElements = [cityOne, cityTwo, cityThree, cityFour, cityFive, citySix, citySeven, cityEight];
        for (let i = 0; i < searchHistory.length && i < cityElements.length; i++) {
        cityElements[i].textContent = searchHistory[i];
        }
    }

     //APIkey from openweatherAPI
     let APIkey ="5e7c300090fc006e727aed7871c6a2eb"

     for (let i = 0; i < history.length; i++) {
         let city = document.getElementById(`city-${i+1}`);
         city.onclick = function() {
           searchWeather(history[i]);
         };
       }
       
     //fetch call with the user input
     function searchWeather(searchValue) {
         fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${APIkey}`)
             .then(response => {
                 if (!response.ok) {
                     throw new Error('Network response was not ok');
                 }
                 return response.json();
             })
             .then(data => {
                 console.log(data,"Data 1");
 