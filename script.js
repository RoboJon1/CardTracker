var sports = ["Football", "Football", "Football", "Football", "Baseball", "Baseball", "Baseball", "Soccer"];
var years = ["2023", "2019", "2023", "2023", "2023", "2019", "2019", "2022"];
var players = ["Shedeur Sanders", "Josh Allen", "Brady Cook", "Bo Nix", "Corbin Carroll", "Shohei Ohtani", "Shohei Ohtani", "Lionel Messi"];

function filter(element) {
    //updates filter arrays to the checked checkboxes
    var checkboxes = element.parentElement.parentElement.querySelectorAll('input[type=checkbox]:checked');
    var sportsFilter = [];
    var yearsFilter = [];
    var playersFilter = [];

    //pushes checked checkboxes to the respective filter
    if(element.parentElement.parentElement.id == "sports") checkboxes.forEach(checkbox => sportsFilter.push(checkbox.id));
    if(element.parentElement.parentElement.id == "years") checkboxes.forEach(checkbox => yearsFilter.push(checkbox.id));
    if(element.parentElement.parentElement.id == "players") checkboxes.forEach(checkbox => playersFilter.push(checkbox.id));

    var cards = document.getElementById("card-bar").querySelectorAll("div.card"); 

    //checks if the sport, year, and player match the filters
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

}

function updateCheckboxes() {
    //runs createCheckboxes for all filter categories
    createCheckboxes(document.getElementById("sports"), sports);
    createCheckboxes(document.getElementById("years"), years);
    createCheckboxes(document.getElementById("players"), players);
}

function createCheckboxes(div, list) {
    //clears all child elements of the div
    div.innerHTML = "";

    //creates the header for each column of checkboxes for Sport, Year, Player etc.
    var divLabel = document.createElement("h2");
    divLabel.textContent = div.id.charAt(0).toUpperCase() + div.id.slice(1, -1);

    div.appendChild(divLabel);

    //creates a new list based on list that doesn't contain any repeats 
    var newList = [];
    list.forEach(function (element) {
        if(!newList.includes(element)) {
            newList.push(element);
        }
        
    })

    //goes through each element of newList
    newList.forEach(function (element) {
        //creates outer div for each checkbox and label
        var spacerDiv = document.createElement("div");

        //creates checkbox and appends it
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = element;
        checkbox.id = element;
        checkbox.onclick = function () {
            filter(this);
        };

        spacerDiv.appendChild(checkbox);
        
        //creates label and appends it
        var label = document.createElement("label")
        label.htmlFor = element;
        label.textContent = " " + element;
        
        spacerDiv.appendChild(label);

        //appends this spacerDiv into the main div
        div.appendChild(spacerDiv);
    })

}


