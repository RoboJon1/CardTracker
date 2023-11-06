var sports = ["football", "football", "football", "football", "baseball", "baseball", "baseball", "soccer"];
var sportsFilter = [];
var years = [2023, 2019, 2023, 2023, 2023, 2019, 2019, 2022];
var yearsFilter = [];
var players = ["Shedeur Sanders", "Josh Allen", "Shedeur Sanders", "Shedeur Sanders", "Shedeur Sanders", "Shohei Ohtani", "Shohei Ohtani", "Shohei Ohtani", "Lionel Messi"];
var playersFilter = [];

function filter(element) {
    var checkboxes = document.getElementById(element.parentElement.parentElement.id).querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(checkbox => sportsFilter.push(checkbox.id));
    checkboxes.forEach(checkbox => yearsFilter.push(checkbox.id));
    checkboxes.forEach(checkbox => playersFilter.push(checkbox.id));

    var cards = document.getElementById("card-bar").querySelectorAll("div.card"); 

    if(sportsFilter.length > 0) {
        cards.forEach(card => card.style.display = "none");
    }
    else {
        cards.forEach(card => card.style.display = "flex");
    }
/*
    sportsFilter.forEach(sport => {
        cards.forEach(function(card, index) {
            if(sport == sports[index]) {
                card.style.display = "flex";
            }
        })
    })
*/

    cards.forEach(function (card, index) {
        var sportMatch = sportsFilter.length === 0 || sportsFilter.includes(sports[index]);
        var yearMatch = yearsFilter.length === 0 || yearsFilter.includes(years[index].toString());
        var playerMatch = playersFilter.length === 0 || playersFilter.includes(players[index]);

        if (sportMatch && yearMatch && playerMatch) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    var sportsFilter = [];
    var yearsFilter = [];
    var playersFilter = [];
}


