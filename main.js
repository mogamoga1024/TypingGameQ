
const domText = document.querySelector("#text");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");

let questionList = createRandomQuestionList(10);
let questionIndex = 0;
domText.innerText = "Spaceで開始";

window.onkeydown = gameStart;

function gameStart(e) {
    if (e.key === " ") {
        domText.innerText = "";
        window.onkeydown = gameMain();
    }
}

function gameMain(e) {
    if (e.repeat) {
        return;
    }

    // todo
}

