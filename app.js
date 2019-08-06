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

//switch color
box[0].addEventListener('click',()=>{
  sColor(0);
  sColor(1);
  sColor(3);
  game();
});

box[1].addEventListener('click',()=>{
  sColor(0);
  sColor(1);
  sColor(2);
  sColor(4);
  game();
});

box[2].addEventListener('click',()=>{
  sColor(1);
  sColor(2);
  sColor(5);
  game();
});

box[3].addEventListener('click',()=>{
  sColor(0);
  sColor(3);
  sColor(4);
  sColor(6);
  game();
});

box[4].addEventListener('click',()=>{
  sColor(1);
  sColor(3);
  sColor(4);
  sColor(5);
  sColor(7);
  game();
});

box[5].addEventListener('click',()=>{
  sColor(2);
  sColor(4);
  sColor(5);
  sColor(8);
  game();
});

box[6].addEventListener('click',()=>{
  sColor(3);
  sColor(6);
  sColor(7);
  game();
});

box[7].addEventListener('click',()=>{
  sColor(4);
  sColor(6);
  sColor(7);
  sColor(8);
  game();
});

box[8].addEventListener('click',()=>{
  sColor(5);
  sColor(7);
  sColor(8);
  game();
});

function sColor(n){
  if(flag[n] === false){
    box[n].style.backgroundColor = "red";
  }else{
    box[n].style.backgroundColor = "#eee";
  }
  flag[n] = !flag[n];
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
