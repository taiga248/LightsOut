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
const box = [zero, one, two, three, four, five, six, seven, eight];

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

(function() {
  randomColor();
})();

/* ランダム配置 */
function randomColor() {
  for (let i = 0; i < box.length; i++) {
    Math.floor(Math.random() * 10) >= 5 ? (tf = true) : (tf = false);
    flag.push(tf);
    if (flag[i]) {
      box[i].classList.remove("box-area__item--Active");
      box[i].classList.add("box-area__item--disActive");
    } else {
      box[i].classList.remove("box-area__item--disActive");
      box[i].classList.add("box-area__item--Active");
    }
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
const switchColor = around_item => {
  for (let i = 0; i < around_item.length; i++) {
    if (flag[around_item[i]]) {
      box[around_item[i]].classList.remove("box-area__item--disActive");
      box[around_item[i]].classList.add("box-area__item--Active");
    } else {
      box[around_item[i]].classList.remove("box-area__item--Active");
      box[around_item[i]].classList.add("box-area__item--disActive");
    }
    flag[around_item[i]] = !flag[around_item[i]];
  }
  if (click_cnt === 0) {
    startTime = Date.now();
    timer();
  }
  clickCount();
  game();
};

/* 時間計測 */
const timer = () => {
  const date = new Date(Date.now() - startTime);
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  time.textContent = "Time : " + min + ":" + sec;
  timeoutId = setTimeout(() => {
    timer();
  }, 10);
};

/* 押下をカウント */
const clickCount = () => {
  click_cnt++;
  counter.textContent = "Count : " + click_cnt;
};

/* クリアしたかどうかの判定 */
const game = () => {
  for (let i = 0; i < box.length; i++) {
    flag[i] ? red_cnt++ : "";
    if (red_cnt === 9) {
      clear_mess.textContent = "GAME CLEAR";
      clearTimeout(timeoutId);
    }
  }
  red_cnt = 0;
};

/* リセット処理 */
reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  flag = [];
  randomColor();
  red_cnt = 0;
  click_cnt = 0;
  clear_mess.textContent = "";
  time.textContent = "Time : 00:00";
  counter.textContent = "Count : " + click_cnt;
});
