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