'use strict'
const zero  = document.getElementById('box-0');
const one   = document.getElementById('box-1');
const two   = document.getElementById('box-2');
const three = document.getElementById('box-3');
const four  = document.getElementById('box-4');
const five  = document.getElementById('box-5');
const six   = document.getElementById('box-6');
const seven = document.getElementById('box-7');
const eight = document.getElementById('box-8');

const random = Math.floor( Math.random() * 2 );
//let reset = document.getElementById('reset');
const Fire = document.getElementById('fire');
let fire = 0;
let cnti = 0;

const box  = [
  zero,  one,   two, 
  three, four,  five, 
  six,   seven, eight,
];
let flag =
  //[true,true,true,true,true,true,true,true,true,];
  [false,false,false,false,false,false,false,false,false,];

/* TODO 初期値乱数配置
for(let i=0; i<box.length; i++){
  if(random === 1){
    flag[i] = true;
  }else(random === 0){
    flag[i] = false;
  }
}*/

// Switch color
box[0].addEventListener('click',()=>{
  sColor(0);
  sColor(1);
  sColor(3);
  check();
});

box[1].addEventListener('click',()=>{
  sColor(0);
  sColor(1);
  sColor(2);
  sColor(4);
  check();
});

box[2].addEventListener('click',()=>{
  sColor(1);
  sColor(2);
  sColor(5);
  check();
});

box[3].addEventListener('click',()=>{
  sColor(0);
  sColor(3);
  sColor(4);
  sColor(6);
  check();
});

box[4].addEventListener('click',()=>{
  sColor(1);
  sColor(3);
  sColor(4);
  sColor(5);
  sColor(7);
  check();
});

box[5].addEventListener('click',()=>{
  sColor(2);
  sColor(4);
  sColor(5);
  sColor(8);
  check();
});

box[6].addEventListener('click',()=>{
  sColor(3);
  sColor(6);
  sColor(7);
  check();
});

box[7].addEventListener('click',()=>{
  sColor(4);
  sColor(6);
  sColor(7);
  sColor(8);
  check();
});

box[8].addEventListener('click',()=>{
  sColor(5);
  sColor(7);
  sColor(8);
  check();
});

function check(){
  count();
  game();
}

function sColor(n){
  if(flag[n] === false){
    box[n].style.backgroundColor = "red";
  }else{
    box[n].style.backgroundColor = "#eee";
  }
  flag[n] = !flag[n];
}

function count(){
  fire++;
  Fire.innerHTML= "count : "+fire;
}

//TODO クリア表示できない
function game(){
  for(let i=0; i<box.length; i++){
    if(flag[i] === true){
      cnt++;
    }
    if(cnt === 9){
      alert("Game");  
    }
  }
  cnt=0;
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
