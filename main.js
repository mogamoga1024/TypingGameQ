
const domText = document.querySelector("#text");
const domRomanContainer = document.querySelector("#roman-container");
const domRoman1 = document.querySelector("#roman1");
const domRoman2 = document.querySelector("#roman2");
const domResult = document.querySelector("#result");

domResult.style.display = "none";

let questionList = createRandomQuestionList(10);
let questionIndex = 0;
let typingText = questionList[questionIndex].typingText;

let missCount = 0;
let typeCount = 0;
let startTime = 0;
let elapsedTime = 0;

gameStart();

function gameStart() {
    domText.innerText = "Spaceで開始";

    window.onkeydown = e => {
        if (e.key === " ") {
            gameMain();
        }
    }
}

function gameMain() {
    domText.innerText = `${questionIndex + 1}:${questionList[questionIndex].text}`;
    domRoman2.innerText = typingText.remainingRoman;

    startTime = performance.now();

    window.onkeydown = e => {
        if (e.repeat) {
            return;
        }
    
        // ShiftやF11のような入力を弾く
        if (!TypingText.isValidInputKey(e.key)) {
            return;
        }

        typeCount++;
    
        const isCapsLock = e.getModifierState("CapsLock");
    
        // キー入力の更新
        const result = typingText.inputKey(e.key, isCapsLock);
        
        switch (result) {
            // 不一致の場合
            case "unmatch":
                missCount++;
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
                    elapsedTime = performance.now() - startTime;
                    domRoman1.innerText += e.key;
                    domRoman2.innerText = "";
                    gameEnd();
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
}

function floor(num, decimalPlaces = 0) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.floor(num * factor) / factor;
}

function gameEnd() {
    window.onkeydown = null;

    domText.innerText = "リザルト";
    domRomanContainer.style.display = "none";
    domResult.style.display = "";

    const epm = missCount / (elapsedTime / (1000 * 60));
    const spm = (typeCount - missCount) / (elapsedTime / (1000 * 60));
    const kpm = typeCount / (elapsedTime / (1000 * 60));

    domResult.innerText =  `誤タイプ率:${floor(missCount / typeCount * 100, 2)}%\n`;
    domResult.innerText += `クリアタイム:${floor(elapsedTime / 1000, 2)}秒\n`;
    domResult.innerText += `1分毎の正タイプ数:${floor(spm, 2)}\n`;
    domResult.innerText += `1分毎の誤タイプ数:${floor(epm, 2)}\n`;
    domResult.innerText += `スコア:${floor(kpm / 5 * Math.pow(1 - missCount / typeCount, 3), 2)}\n`;
}
