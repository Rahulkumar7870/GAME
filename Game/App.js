let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
 
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
       if (start == false) {
        console.log("game  is started");
        started = true;

          levelUp();
       }
       
       
});

function gameFlash(btn) {
       btn.classlist.add("flash");
       setTimeout(function (){
              btn.classlist.remove("flash");
       }, 250);
} 

      
function userFlash(btn) {
       btn.classlist.add("userflash");
       setTimeout(function () {
        btn.classlist.remove("userflash");
       }, 250);
}      

function levelUp(){
       userSeq = [];
       level++;
       h2.innerText = `level ${level};`

       let randIdx = Math.floor(Math.random () * 3);
       let randomColor = btns[randIdx];
       gameSeq.push(randomColor);
       console.log(gameSeq);
       gameFlash(randBtn);
}
function checkAns() {
//     console.log("curr level :" , level);
    let idx = level - 1;
    
    if (user[idx]  === gameSeq[idx]) {
       if(user.length == gameSeq.length) {
           setTimeout(levelUp,1000);   
       }
    }else{
      h2.innerHTML = `Game over! your score was <br>${level}</br> <br> Press any key to start. `;
      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
       document.querySelector("body").style.backgroundColor = "red";
      }, 150);
      reset();
    }

}

function btnPress() {
       
       let btn = this;
       userflash(btn);
       
  

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
       
    checkAns(userSeq.length-1);
}


  let allBtns = document.querySelectorAll(".btn");
  for (btn of allBtns) {
       btn.addEventListener("click", btnPress);
}


function reset() {
      started = false;
      gameSeq = [];
      userSeq = [];
      level = 0 ;

}