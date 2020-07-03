"use strict";
const zero = document.getElementById("box-0");
const one = document.getElementById("box-1");
const two = document.getElementById("box-2");
const three = document.getElementById("box-3");
const four = document.getElementById("box-4");
const five = document.getElementById("box-5");
const six = document.getElementById("box-6");
const seven = document.getElementById("box-7");
const eight = document.getElementById("box-8");

const clear_mess = document.getElementById("clear_mess");
const counter = document.getElementById("count");
const reset = document.getElementById("reset");
const time = document.getElementById("time");

let click_cnt = 0;
let red_cnt = 0;
let startTime;
let timeoutId;
let flag = [];
let tf;

const box = [zero, one, two, three, four, five, six, seven, eight];

(function() {
  randomColor();
})();

/* ランダム配置 */
function randomColor() {
  for (let i = 0; i < box.length; i++) {
    Math.floor(Math.random() * 10) >= 5 ? (tf = true) : (tf = false);
    flag.push(tf);
    flag[i]
      ? (box[i].style.backgroundColor = "red")
      : (box[i].style.backgroundColor = "#eee");
  }
}

/* それぞれ押下された時の処理 */
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", () => {
    switch (i) {
      case 0:
        switchColor([0, 1, 3]);
        break;

      case 1:
        switchColor([0, 1, 2, 4]);
        break;

      case 2:
        switchColor([1, 2, 5]);
        break;

      case 3:
        switchColor([0, 3, 4, 6]);
        break;

      case 4:
        switchColor([1, 3, 4, 5, 7]);
        break;

      case 5:
        switchColor([2, 4, 5, 8]);
        break;

      case 6:
        switchColor([3, 6, 7]);
        break;

      case 7:
        switchColor([4, 6, 7, 8]);
        break;

      case 8:
        switchColor([5, 7, 8]);
        break;
    }
  });
}

/* Switch Color and Check */
function switchColor(n) {
  for (let i = 0; i < n.length; i++) {
    if (!flag[n[i]]) {
      box[n[i]].style.backgroundColor = "red";
    } else {
      box[n[i]].style.backgroundColor = "#eee";
    }
    flag[n[i]] = !flag[n[i]];
  }
  clickCount();
  game();
}

/* 押下をカウント */
function clickCount() {
  if (click_cnt === 0) {
    startTime = Date.now();
    timer();
  }
  click_cnt++;
  counter.textContent = "count : " + click_cnt;
}

/* 時間計測 */
function timer() {
  const date = new Date(Date.now() - startTime);
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  time.textContent = "Time : " + min + ":" + sec;
  timeoutId = setTimeout(() => {
    timer();
  }, 10);
}

/* クリアしたかどうかの判定 */
function game() {
  for (let i = 0; i < box.length; i++) {
    flag[i] ? red_cnt++ : "";
    if (red_cnt === 9) {
      clear_mess.textContent = "GAME CLEAR";
      clearTimeout(timeoutId);
    }
  }
  red_cnt = 0;
}

/* リセット処理 */
reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  flag = [];
  randomColor();
  red_cnt = 0;
  click_cnt = 0;
  clear_mess.textContent = "";
  time.textContent = "Time : 00:00";
  counter.textContent = "count : " + click_cnt;
});
