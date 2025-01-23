let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","green","purple"];

let h2=document.querySelector("h2");
let started=false;
let level=0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
    started=true;

    levelUp();
    }
});

function startGame() {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let random=Math.floor(Math.random()* btns.length);
    let ranColor=btns[random];
    let randbtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameflash(randbtn);
}

function gameOverEffect() {
    document.body.classList.add("game-over");
    setTimeout(() => document.body.classList.remove("game-over"), 500);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerText=`Game over ! Your high score is ${level}`;
        gameOverEffect();
    }
}


// function checkAns(idx){
//     if(userSeq[idx]=== gameSeq[idx]){
//         if(userSeq.length==gameSeq.length){
//             setTimeout(levelUp,1000);
//         }
//     }else{
//         h2.innerText=`Game over ! Your high score is ${level}`;
//         document.querySelector("body").style.backgroundColor="red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor="white";
//         },150);
//     }
// }

function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let  allbtns=document.querySelectorAll(".btn");
for(let btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    console.log("Game reset");
    started = false;
    h2.innerText = "Press Any Key to Start";
    gameSeq = [];
    userSeq = [];
    level = 0;
}