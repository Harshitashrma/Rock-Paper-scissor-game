const userScore=document.querySelector("#user-count");
const compScore=document.querySelector("#comp-count");
let uc=0;
let cc=0;
const newGame=document.querySelector(".new-game");
const choices=document.querySelectorAll(".signs");

let msg=document.querySelector("#msg");

const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
}
const drawGame=()=>{
   msg.innerText="Match is Draw";
   msg.style.backgroundColor="red";
}

const showWinner=(userWin,userChoice,comChoice)=>{
if(userWin)
{
    uc++;
    userScore.innerText=uc;
    msg.innerText=`Congratulations,${userChoice} Win the match from ${comChoice}`;
    msg.style.backgroundColor="green";
}
else{
    cc++;
    compScore.innerText=cc;
    msg.innerText=`Oh No, ${userChoice} lose the match from ${comChoice}`;
    msg.style.backgroundColor="blue";
}
}

const playGame=(userChoice)=>{
const comChoice= genCompChoice();

if(userChoice===comChoice)
{
    //drawgame
    drawGame();
}

else{
    let userWin=true;
    if(userChoice==="rock")
    {
        //computerchoice=paper,scissor

        userWin=comChoice==="paper"?false:true;
    }
    else if(userChoice==="paper")
    {
        //computerChoice=rock,scissor

        userWin=comChoice==="scissors"?false:true;
    }
    else{//userchoice="scissors" computer=rock paper
         userWin=comChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,comChoice);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
const userChoice=choice.getAttribute("id");
playGame(userChoice);
    })
})

newGame.addEventListener("click",()=>{
    userScore.innerText=0;
    compScore.innerText=0;
    msg.innerText="Play your move";
    msg.style.backgroundColor="black";
    msg.style.color="white";
})