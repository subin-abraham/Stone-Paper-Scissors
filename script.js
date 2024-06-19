function openSelectPage() {
    window.location.href = './selectPage.html'
}
function clickedRock(){
    localStorage.setItem("clickedValue", "Stone");
    openSelectPage();
}
function clickedPaper(){
    localStorage.setItem("clickedValue", "Paper");
    openSelectPage();
}
function clickedScissor(){
    localStorage.setItem("clickedValue", "Scissors");
    openSelectPage();
}