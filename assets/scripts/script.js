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