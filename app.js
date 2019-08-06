'use strict'
let zero  = document.getElementById('box-0');
let one   = document.getElementById('box-1');
let two   = document.getElementById('box-2');
let three = document.getElementById('box-3');
let four  = document.getElementById('box-4');
let five  = document.getElementById('box-5');
let six   = document.getElementById('box-6');
let seven = document.getElementById('box-7');
let eight = document.getElementById('box-8');

//var random = Math.floor( Math.random() * 2 );
//let reset = document.getElementById('reset');
let Fire = document.getElementById('fire');
let fire = 0;

let box  = [
  zero,  one,   two, 
  three, four,  five, 
  six,   seven, eight,
];
let flag = [
  false,false,false,
  false,false,false,
  false,false,false,
];

/* TODO 初期値乱数配置
for(let i=0; i<box.length; i++){
  if(random === 1){
    flag[i] = true;
  }else{
    flag[i] = false;
  }
}*/


box[0].addEventListener('click',()=>{
  cZero();
  cOne();
  cThree();
  game();
});

box[1].addEventListener('click',()=>{
  cZero();
  cOne();
  cTwo();
  cFour();
  game();
});

box[2].addEventListener('click',()=>{
  cOne();
  cTwo();
  cFive();
  game();
});

box[3].addEventListener('click',()=>{
  cZero();
  cThree();
  cFour();
  cSix();
  game();
});

box[4].addEventListener('click',()=>{
  cOne();
  cThree();
  cFour();
  cFive();
  cSeven();
  game();
});

box[5].addEventListener('click',()=>{
  cTwo();
  cFour();
  cFive();
  cEight();
  game();
});

box[6].addEventListener('click',()=>{
  cThree();
  cSix();
  cSeven();
  game();
});

box[7].addEventListener('click',()=>{
  cFour();
  cSix();
  cSeven();
  cEight();
  game();
});

box[8].addEventListener('click',()=>{
  cFive();
  cSeven();
  cEight();
  game();
});



function cZero(){
  if(flag[0] === false){
    box[0].style.backgroundColor = "red";
    flag[0] = !flag[0];
  }else{
    box[0].style.backgroundColor = "#eee";
    flag[0] = !flag[0];
  }
}
function cOne(){
  if(flag[1] === false){
    box[1].style.backgroundColor = "red";
    flag[1] = !flag[1];
  }else{
    box[1].style.backgroundColor = "#eee";
    flag[1] = !flag[1];
  }
}
function cTwo(){
  if(flag[2] === false){
    box[2].style.backgroundColor = "red";
    flag[2] = !flag[2];
  }else{
    box[2].style.backgroundColor = "#eee";
    flag[2] = !flag[2];
  }
}
function cThree(){
  if(flag[3] === false){
    box[3].style.backgroundColor = "red";
    flag[3] = !flag[3];
  }else{
    box[3].style.backgroundColor = "#eee";
    flag[3] = !flag[3];
  }
}
function cFour(){
  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }
}
function cFive(){
  if(flag[5] === false){
    box[5].style.backgroundColor = "red";
    flag[5] = !flag[5];
  }else{
    box[5].style.backgroundColor = "#eee";
    flag[5] = !flag[5];
  }
}
function cSix(){
  if(flag[6] === false){
    box[6].style.backgroundColor = "red";
    flag[6] = !flag[6];
  }else{
    box[6].style.backgroundColor = "#eee";
    flag[6] = !flag[6];
  }
}
function cSeven(){
  if(flag[7] === false){
    box[7].style.backgroundColor = "red";
    flag[7] = !flag[7];
  }else{
    box[7].style.backgroundColor = "#eee";
    flag[7] = !flag[7];
  }
}
function cEight(){
  if(flag[8] === false){
    box[8].style.backgroundColor = "red";
    flag[8] = !flag[8];
  }else{
    box[8].style.backgroundColor = "#eee";
    flag[8] = !flag[8];
  }
}


//TODO クリア表示できない
function game(){
  fire++;
  Fire.innerHTML= "count : "+fire;

  for(let i=0; i<box.length; i++){
    let cnt=0;
  
    if(flag[i] === true){
      cnt++;
      if(cnt === 9)
        alert("Game"); 
    }
  }
}
/* TODO 表のリセット
function Reset(){
  for(let i=0; i<box.length; i++){
    box[i]=false;
  }
}
reset.addEventListener('click',()=>{
  Reset();
});
*/
