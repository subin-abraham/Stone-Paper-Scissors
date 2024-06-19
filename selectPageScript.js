function onLoad() {
    var clickedValue = localStorage.getItem("clickedValue");
    getUserInput(clickedValue);
}
function getUserInput(userInput) {
    getElementCommonMethod(userInput, "displayRock", "displayPaper", "displayScissors");
    getSystemValue();
}
function getSystemValue() {
    const randomValues = ["Stone", "Paper", "Scissors"]
    const randomElement = randomValues[Math.floor(Math.random() * randomValues.length)];
    getElementCommonMethod(randomElement, "systemDisplayRock", "systemDisplayPaper", "systemDisplayScissors");
}
function getElementCommonMethod(userInput, idNameOne, idNameTwo, idNameThree) {
    if (userInput == "Stone") {
        document.getElementById(idNameOne).style.display = "";
        document.getElementById(idNameTwo).style.display = "none";
        document.getElementById(idNameThree).style.display = "none";
    } else if (userInput == "Paper") {
        document.getElementById(idNameOne).style.display = "none";
        document.getElementById(idNameTwo).style.display = "";
        document.getElementById(idNameThree).style.display = "none";
    } else if (userInput == "Scissors") {
        document.getElementById(idNameOne).style.display = "none";
        document.getElementById(idNameTwo).style.display = "none";
        document.getElementById(idNameThree).style.display = "";

    } else {
        document.getElementById(idNameOne).style.display = "none";
        document.getElementById(idNameTwo).style.display = "none";
        document.getElementById(idNameThree).style.display = "none";
    }

}
function clickedPlayAgain(){
    window.location.href = "./index.html"
}