let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";
let over = false;

//Function to Change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

//Functin to Check for a win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxItem");
    let win = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 3, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 3, 15, 135]
    ]
    win.forEach(e => {
        if((boxText[e[0]].innerText === boxText[e[1]].innerText && boxText[e[2]].innerText === boxText[e[1]].innerText) && boxText[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            over = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "80%";
            gameOver.play();
        }
    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxItem");
    element.addEventListener("click", () => {
        if(boxText.innerText === ""){
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if(!over){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    }) 
})

//Event listener to reset the Game
reset.addEventListener("click", () => {
    let boxText = document.querySelectorAll(".boxItem");
    Array.from(boxText).forEach(e => {
        e.innerText = "";
    })
    over = true;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0";
    document.querySelector(".line").style.width = "0";
})