var sports = ["football", "football", "football", "football", "baseball", "baseball", "baseball"];
var sportsFilter = [];
var years = [2023, 2019, 2023, 2023, 2023, 2019, 2019];
var yearsFilter = [];
var players = ["Shedeur Sanders", "Josh Allen", "Shedeur Sanders", "Shedeur Sanders", "Shedeur Sanders", "Shohei Ohtani", "Shohei Ohtani", "Shohei Ohtani"];
var playersFilter = [];

function filter(element) {
    var checkboxes = document.getElementById(element.parentElement.id).querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(checkbox => sportsFilter.push(checkbox.id));
    
    sportsFilter.push(element.id);
    var cards = document.getElementById("card-bar").querySelectorAll("div.card"); 

    if(sportsFilter.length > 0) {
        cards.forEach(card => card.style.display = "none");
    }
    else {
        cards.forEach(card => card.style.display = "flex");
    }

    sportsFilter.forEach(sport => {
        cards.forEach(function(card, index) {
            if(sport == sports[index]) {
                card.style.display = "flex";
            }
        })
    })
    
    sportsFilter = [];
}

