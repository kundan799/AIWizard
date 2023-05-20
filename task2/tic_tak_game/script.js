console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

// check for win
const checkWin = () => {
  var bostexts = document.getElementsByClassName("boxtext");
  //console.log("bostexts",bostexts)
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    //console.log(e[0])
    //nsole.log(bostexts[e[0]].innerText)
    if (
      bostexts[e[0]].innerText === bostexts[e[1]].innerText &&
      bostexts[e[2]].innerText === bostexts[e[1]].innerText &&
      bostexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        bostexts[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";
        gameover.play()

    }
  });
};

// game logic
let boxes = document.getElementsByClassName("box");
console.log(boxes);
Array.from(boxes).forEach((element) => {
  //console.log("element",element)
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "0px";
})
