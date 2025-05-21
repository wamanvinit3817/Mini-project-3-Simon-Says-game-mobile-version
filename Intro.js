let gameSeq=[];
let userSeq=[];

let btns=["yellow","pink","purple","green"];


let started=false;
let level=0;

let h3=document.querySelector("h3");

document.addEventListener("dblclick",function(){
    if(started==false){
        console.log("Game started!")
        started=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);


}

function levelUp(){
    userSeq=[];
       level++;
       h3.innerHTML=`Level ${level}`;

       let randomindex=Math.floor(Math.random()*3);
       let randomColor=btns[randomindex];
       let randombtn=document.querySelector(`.${randomColor}`);
       gameSeq.push(randomColor);
       console.log(gameSeq)
       btnFlash(randombtn);


       btnFlash();


}

function check(index){
    console.log(level);
   
    if(userSeq[index]==gameSeq[index]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        
        
         h3.innerHTML=`Game over!Your score was:<b>${level}</b><br>Double click on screen(other than boxes) to restart the game.`
        redbg();
       
        
       
    }
}

function redbg(){
    let body=document.querySelector("body");
    body.classList.add("redbg");
    setTimeout(function(){
        body.classList.remove("redbg")
    },250)
    
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


function btnpress(){
    let btn=this;
    btnFlash(btn);
    let usercolor=btn.getAttribute("id");
    userSeq.push(usercolor);
    check(userSeq.length-1);

}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
let highs=document.querySelector(".highscore");



