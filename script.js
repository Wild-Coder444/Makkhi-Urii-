let fly = document.querySelector(".one");
let spider = document.querySelector(".two");
let lizard = document.querySelector(".three");

let scoreText = document.querySelector("#score");
let gameOverScreen = document.querySelector("#gameover");
let finalScore = document.querySelector("#finalScore");


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;


let spiderX = 200;
let spiderY = 200;


let lizardX = window.innerWidth - 200;
let lizardY = window.innerHeight - 200;


let gameRunning = true;

let score = 0;


window.addEventListener("mousemove", function (e) {

    mouseX = e.clientX;
    mouseY = e.clientY;

});


function gameLoop() {

    if (!gameRunning) {
        return;
    }


    fly.style.left = mouseX + "px";
    fly.style.top = mouseY + "px";

    spiderX += (mouseX - spiderX) * 0.012;

    spiderY += (mouseY - spiderY) * 0.012;


    lizardX += (mouseX - lizardX) * 0.008;

    lizardY += (mouseY - lizardY) * 0.008;

    spider.style.left = spiderX + "px";
    spider.style.top = spiderY + "px";

    lizard.style.left = lizardX + "px";
    lizard.style.top = lizardY + "px";
    let spiderDistance = Math.hypot(
        mouseX - spiderX,
        mouseY - spiderY
    );


    let lizardDistance = Math.hypot(
        mouseX - lizardX,
        mouseY - lizardY
    );

    if (spiderDistance < 60) {

        endGame();

        return;
    }

    if (lizardDistance < 60) {

        endGame();

        return;
    }

    requestAnimationFrame(gameLoop);
}

setInterval(function () {

    if (gameRunning) {

        score++;

        scoreText.innerText = score;

    }

}, 100);

function endGame() {

    gameRunning = false;

    finalScore.innerText = score;

    gameOverScreen.style.display = "block";
    document.body.style.cursor = "auto";
    document.documentElement.style.cursor = "auto";
}

function restartGame() {

    score = 0;

    scoreText.innerText = "0";

    gameRunning = true;

    gameOverScreen.style.display = "none";
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    spiderX = 200;
    spiderY = 200;

    lizardX = window.innerWidth - 200;
    lizardY = window.innerHeight - 200;

    gameLoop();
}

gameLoop();