
const domText = document.querySelector("#text");
const domRomanContainer = document.querySelector("#roman-container");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");
const domResult = document.querySelector("#result");

domResult.style.display = "none";

let questionList = createRandomQuestionList(10);
let questionIndex = 0;
let typingText = questionList[questionIndex].typingText;
domText.innerText = "Spaceで開始";

window.onkeydown = gameStart;

function gameStart(e) {
    if (e.key === " ") {
        domText.innerText = `${questionIndex + 1}:${questionList[questionIndex].text}`;
        domRoman2.innerText = typingText.remainingRoman;
        window.onkeydown = gameMain;
    }
}

function gameMain(e) {
    if (e.repeat) {
        return;
    }

    // ShiftやF11のような入力を弾く
    if (!TypingText.isValidInputKey(e.key)) {
        return;
    }

    const isCapsLock = e.getModifierState("CapsLock");

    // キー入力の更新
    const result = typingText.inputKey(e.key, isCapsLock);
    
    switch (result) {
        // 不一致の場合
        case "unmatch":
            return;

        // 一致しているが文章が未完成の場合
        case "incomplete":
            domRoman1.innerText += e.key;
            domRoman2.innerText = typingText.remainingRoman;
            return;

        // 文章が完成した場合
        case "complete":
            // クリアしたか
            if (++questionIndex >= questionList.length) {
                domRoman1.innerText += e.key;
                domRoman2.innerText = "";
                window.onkeydown = null;
                displayResult();
                return;
            }

            // 次の文章へ
            domText.innerText = `${questionIndex + 1}:${questionList[questionIndex].text}`;
            typingText = questionList[questionIndex].typingText;
        
            domRoman1.innerText = "";
            domRoman2.innerText = typingText.remainingRoman;

            return;
    }
}

function displayResult() {
    domText.innerText = "リザルト";
    domRomanContainer.style.display = "none";
    domResult.style.display = "";

    domResult.innerText = "hogehoge";
}

