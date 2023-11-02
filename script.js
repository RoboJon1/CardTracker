var sports = ["football", "football", "football", "football", "baseball", "baseball", "baseball"];
var years = [2023, 2019, 2023, 2023, 2023, 2019, 2019];
var players = ["Shedeur Sanders", "Josh Allen", "Shedeur Sanders", "Shedeur Sanders", "Shedeur Sanders", "Shohei Ohtani", "Shohei Ohtani", "Shohei Ohtani"];

function filter(element) {
    var sport = element.id;
    var cards = document.getElementById("card-bar").querySelectorAll("card");  
    for(let i = 0; i < cards.length; i++) {
        console.log("hello");
        if(sports[i] == sport) {
            cards[i].style.display = "flex";
        }
        else {
            cards[i].style.display = "none";
        }
    }
}

