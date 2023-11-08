var sports = ["football", "football", "football", "football", "baseball", "baseball", "baseball", "soccer"];
var sportsFilter = [];
var years = ["2023", "2019", "2023", "2023", "2023", "2019", "2019", "2022"];
var yearsFilter = [];
var players = ["Shedeur Sanders", "Josh Allen", "Shedeur Sanders", "Shedeur Sanders", "Shedeur Sanders", "Shohei Ohtani", "Shohei Ohtani", "Lionel Messi"];
var playersFilter = [];

function filter(element) {
    var checkboxes = element.parentElement.parentElement.querySelectorAll('input[type=checkbox]:checked');
    if(element.parentElement.parentElement.id == "sports") checkboxes.forEach(checkbox => sportsFilter.push(checkbox.id));
    if(element.parentElement.parentElement.id == "years") checkboxes.forEach(checkbox => yearsFilter.push(checkbox.id));
    if(element.parentElement.parentElement.id == "players") checkboxes.forEach(checkbox => playersFilter.push(checkbox.id));

    var cards = document.getElementById("card-bar").querySelectorAll("div.card"); 

    if(sportsFilter.length > 0) {
        cards.forEach(card => card.style.display = "none");
    }
    else {
        cards.forEach(card => card.style.display = "flex");
    }

    cards.forEach(function (card, index) {
        var sportMatch = sportsFilter.length === 0 || sportsFilter.includes(sports[index]);
        var yearMatch = yearsFilter.length === 0 || yearsFilter.includes(years[index]);
        var playerMatch = playersFilter.length === 0 || playersFilter.includes(players[index]);

        if (sportMatch && yearMatch && playerMatch) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    sportsFilter = [];
    yearsFilter = [];
    playersFilter = [];
}

/*
function createCheckboxes(div) {
    document.getElementById("sports")
    document.getElementById("years")
    document.getElementById("players")
}
*/

