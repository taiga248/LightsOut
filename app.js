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


//   -- 0 --
box[0].addEventListener('click',()=>{
  if(flag[0] === false){
    box[0].style.backgroundColor = "red";
    flag[0] = !flag[0];
  }else{
    box[0].style.backgroundColor = "#eee";
    flag[0] = !flag[0];
  }

  if(flag[1] === false){
    box[1].style.backgroundColor = "red";
    flag[1] = !flag[1];
  }else{
    box[1].style.backgroundColor = "#eee";
    flag[1] = !flag[1];
  }

  if(flag[3] === false){
    box[3].style.backgroundColor = "red";
    flag[3] = !flag[3];
  }else{
    box[3].style.backgroundColor = "#eee";
    flag[3] = !flag[3];
  }
  game();
});

//   -- 1 --
box[1].addEventListener('click',()=>{
  if(flag[0] === false){
    box[0].style.backgroundColor = "red";
    flag[0] = !flag[0];
  }else{
    box[0].style.backgroundColor = "#eee";
    flag[0] = !flag[0];
  }

  if(flag[1] === false){
    box[1].style.backgroundColor = "red";
    flag[1] = !flag[1];
  }else{
    box[1].style.backgroundColor = "#eee";
    flag[1] = !flag[1];
  }

  if(flag[2] === false){
    box[2].style.backgroundColor = "red";
    flag[2] = !flag[2];
  }else{
    box[2].style.backgroundColor = "#eee";
    flag[2] = !flag[2];
  }

  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }
  game();
});

//   -- 2 --
box[2].addEventListener('click',()=>{
  if(flag[1] === false){
    box[1].style.backgroundColor = "red";
    flag[1] = !flag[1];
  }else{
    box[1].style.backgroundColor = "#eee";
    flag[1] = !flag[1];
  }

  if(flag[2] === false){
    box[2].style.backgroundColor = "red";
    flag[2] = !flag[2];
  }else{
    box[2].style.backgroundColor = "#eee";
    flag[2] = !flag[2];
  }

  if(flag[5] === false){
    box[5].style.backgroundColor = "red";
    flag[5] = !flag[5];
  }else{
    box[5].style.backgroundColor = "#eee";
    flag[5] = !flag[5];
  }
  game();
});

//   -- 3 --
box[3].addEventListener('click',()=>{
  if(flag[0] === false){
    box[0].style.backgroundColor = "red";
    flag[0] = !flag[0];
  }else{
    box[0].style.backgroundColor = "#eee";
    flag[0] = !flag[0];
  }

  if(flag[3] === false){
    box[3].style.backgroundColor = "red";
    flag[3] = !flag[3];
  }else{
    box[3].style.backgroundColor = "#eee";
    flag[3] = !flag[3];
  }

  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }

  if(flag[6] === false){
    box[6].style.backgroundColor = "red";
    flag[6] = !flag[6];
  }else{
    box[6].style.backgroundColor = "#eee";
    flag[6] = !flag[6];
  }
  game();
});

//   -- 4 --
box[4].addEventListener('click',()=>{
  if(flag[1] === false){
    box[1].style.backgroundColor = "red";
    flag[1] = !flag[1];
  }else{
    box[1].style.backgroundColor = "#eee";
    flag[1] = !flag[1];
  }

  if(flag[3] === false){
    box[3].style.backgroundColor = "red";
    flag[3] = !flag[3];
  }else{
    box[3].style.backgroundColor = "#eee";
    flag[3] = !flag[3];
  }
  
  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }

  if(flag[5] === false){
    box[5].style.backgroundColor = "red";
    flag[5] = !flag[5];
  }else{
    box[5].style.backgroundColor = "#eee";
    flag[5] = !flag[5];
  }

  if(flag[7] === false){
    box[7].style.backgroundColor = "red";
    flag[7] = !flag[7];
  }else{
    box[7].style.backgroundColor = "#eee";
    flag[7] = !flag[7];
  }
  game();
});

//   -- 5 --
box[5].addEventListener('click',()=>{
  if(flag[2] === false){
    box[2].style.backgroundColor = "red";
    flag[2] = !flag[2];
  }else{
    box[2].style.backgroundColor = "#eee";
    flag[2] = !flag[2];
  }

  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }

  if(flag[5] === false){
    box[5].style.backgroundColor = "red";
    flag[5] = !flag[5];
  }else{
    box[5].style.backgroundColor = "#eee";
    flag[5] = !flag[5];
  }

  if(flag[8] === false){
    box[8].style.backgroundColor = "red";
    flag[8] = !flag[8];
  }else{
    box[8].style.backgroundColor = "#eee";
    flag[8] = !flag[8];
  }
  game();
});

//   -- 6 --
box[6].addEventListener('click',()=>{

  if(flag[3] === false){
    box[3].style.backgroundColor = "red";
    flag[3] = !flag[3];
  }else{
    box[3].style.backgroundColor = "#eee";
    flag[3] = !flag[3];
  }

  if(flag[6] === false){
    box[6].style.backgroundColor = "red";
    flag[6] = !flag[6];
  }else{
    box[6].style.backgroundColor = "#eee";
    flag[6] = !flag[6];
  }

  if(flag[7] === false){
    box[7].style.backgroundColor = "red";
    flag[7] = !flag[7];
  }else{
    box[7].style.backgroundColor = "#eee";
    flag[7] = !flag[7];
  }
  game();
});

//   -- 7 --
box[7].addEventListener('click',()=>{
  if(flag[4] === false){
    box[4].style.backgroundColor = "red";
    flag[4] = !flag[4];
  }else{
    box[4].style.backgroundColor = "#eee";
    flag[4] = !flag[4];
  }

  if(flag[6] === false){
    box[6].style.backgroundColor = "red";
    flag[6] = !flag[6];
  }else{
    box[6].style.backgroundColor = "#eee";
    flag[6] = !flag[6];
  }

  if(flag[7] === false){
    box[7].style.backgroundColor = "red";
    flag[7] = !flag[7];
  }else{
    box[7].style.backgroundColor = "#eee";
    flag[7] = !flag[7];
  }

  if(flag[8] === false){
    box[8].style.backgroundColor = "red";
    flag[8] = !flag[8];
  }else{
    box[8].style.backgroundColor = "#eee";
    flag[8] = !flag[8];
  }
  game();
});

//   -- 8 --
box[8].addEventListener('click',()=>{
  if(flag[5] === false){
    box[5].style.backgroundColor = "red";
    flag[5] = !flag[5];
  }else{
    box[5].style.backgroundColor = "#eee";
    flag[5] = !flag[5];
  }

  if(flag[7] === false){
    box[7].style.backgroundColor = "red";
    flag[7] = !flag[7];
  }else{
    box[7].style.backgroundColor = "#eee";
    flag[7] = !flag[7];
  }

  if(flag[8] === false){
    box[8].style.backgroundColor = "red";
    flag[8] = !flag[8];
  }else{
    box[8].style.backgroundColor = "#eee";
    flag[8] = !flag[8];
  }
  game();
});

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
