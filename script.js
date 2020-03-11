var vraagAntwoorden = ["Parijs", 8, "Ijselmeer"];
var antwoorden = [];
var pushing;
var correct;

function checkAntwoord(){
    for (i=0; i<=2; i++){
        pushing = document.getElementById("vraag"+i).value;
        antwoorden.push(pushing);
        //Ik zet hier de gegeven antwoorden in een array met de hulp van een loop
    }
    for (y=0; y<=2; y++){
        if (antwoorden[y] == vraagAntwoorden[y]){
            document.getElementById("vraag"+y).style.backgroundColor = "green";
            correct++
        }
        else {
            document.getElementById("vraag"+y).style.backgroundColor = "red";
        }
        //hier worden de antwoorden gecontroleerd, en er wordt een variable geplust als ie goed is
    }
    if (correct == vraagAntwoorden.length){
        document.getElementById("resultaat").innerHTML = "Alle antwoorden zijn goed"
    }
    else {
        document.getElementById("resultaat").innerHTML = "Niet alle antwoorden zijn goed"
    }
    //hier worden de resultaten geprint.
    antwoorden = [];
    correct = 0;
}