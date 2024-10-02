let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let btns = ["orange", "pink", "blue", "violet"];
let h3 = document.querySelector("h3");
let allbtns = document.querySelectorAll(".btn");

document.addEventListener("keypress", function () {
    console.log("game is started.");
    started = true;
    levelUp();
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h3.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randIdx];
    let randbtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    btnflash(randbtn);
}

function btnPress() {
    let btn = this;
    btnflash(btn);
}

for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
