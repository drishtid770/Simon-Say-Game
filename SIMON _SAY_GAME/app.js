// MINI PROJECT
// *****************



// SIMON SAY GAME
// ******************


let gameSeq=[];
let userSeq=[];

let started = false;
let level =0;
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
if(started==false)
{
    console.log("game is started !!");
    started=true;
    levelUp();
}
});

function gameFlash(btn)
{
btn.classList.add("flash");
setTimeout(function()
{
btn.classList.remove("flash");
},250);
}


function userFlash(btn)
{
btn.classList.add("userflash");
setTimeout(function()
{
btn.classList.remove("userflash");
},250);
}

function levelUp()
{
    userSeq=[];
    level++; 
    h2.innerText=`Level ${level}`;

    // random button choose
    let randomIndex=Math.floor(Math.random()*3);
  let randomColor=btns[randomIndex];
  let randombtn=document.querySelector(`.${randomColor}`);
  gameSeq.push(randomColor);
  console.log(gameSeq);
    gameFlash( randombtn);
}



function checkAns(index)
{
    // console.log("current level:",level);
    // let index=level-1;
    if(userSeq[index]==gameSeq[index])
    {
        if(userSeq.length==gameSeq.length)
        {
setTimeout(levelUp,1000);
        }
       console.log("same value");
    }
else
{
    h2.innerHTML=`Game over! Your score was <b>${level}</b> <br>Press any key to start!`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function()
{
    document.querySelector("body").style.backgroundColor="white";
},150);
reset();
}
}



function btnpress(){
    // console.log("btn was pressed !");
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns)
{
    btn.addEventListener("click",btnpress);

}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}