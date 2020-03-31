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

const clear_mess = document.getElementById('clear_mess');
const counter = document.getElementById('count');
const reset = document.getElementById('reset');
const time = document.getElementById('time');
let click_cnt = 0;
let red_cnt = 0;
let startTime;
let timeoutId;

const box  = [
  zero,  one,   two, 
  three, four,  five, 
  six,   seven, eight,
];

let flag = [false,false,false,false,false,false,false,false,false];

for(let i=0; i<box.length; i++){
  box[i].addEventListener("click", ()=>{
    switch (i){
      case 0:
        sColor([0,1,3]);
        break;

      case 1:
        sColor([0,1,2,4]);
        break;

      case 2:
        sColor([1,2,5]);
        break;

      case 3:
        sColor([0,3,4,6]);
        break;

      case 4:
        sColor([1,3,4,5,7]);
        break;

      case 5:
        sColor([2,4,5,8]);
        break;

      case 6:
        sColor([3,6,7]);
        break;

      case 7:
        sColor([4,6,7,8]);
        break;

      case 8:
        sColor([5,7,8]);
        break;
    }
  });
}

// Switch Color and Check
function sColor(n){
  for(let i=0; i<n.length; i++){
    if(flag[n[i]] === false){
      box[n[i]].style.backgroundColor = "red";
    }else{
      box[n[i]].style.backgroundColor = "#eee";
    }
    flag[n[i]] = !flag[n[i]];
  }
  clickCount();
  game();
}

function clickCount(){
  if(click_cnt === 0){
    startTime = Date.now();
    timer();
  }
  click_cnt++;
  counter.innerHTML= "count : " + click_cnt;
}

function timer() {
  const date = new Date(Date.now() - startTime);
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  time.innerHTML = "Time : "+ min +":"+ sec;
  timeoutId = setTimeout(() => {
    timer();
  }, 10);
}

function game(){
  for(let i=0; i<box.length; i++){
    flag[i] === true ? red_cnt++ : "";
    if(red_cnt === 9){
      clear_mess.innerHTML = "GAME CLEAR！";  
      clearTimeout(timeoutId);
    }
  }
  red_cnt = 0;
}

reset.addEventListener('click', ()=>{
  for(let i=0; i<box.length; i++){
    flag[i] = false;
    box[i].style.backgroundColor = "#eee";
  }
  click_cnt = 0;
  counter.innerHTML= "count : " + click_cnt;
  clearTimeout(timeoutId);
  time.innerHTML = "Time : 00:00";
  clear_mess.innerHTML = "";
  red_cnt = 0;
});