"use strict";

const clear_mess = document.getElementById("clear_mess");
const reset = document.getElementById("reset");
const count = document.getElementById("js-count");
const time = document.getElementById("js-time");
const box_area = document.getElementById("js-box-area");

let click_cnt = 0;
let startTime;
let timeoutId;
const boxes = [];

/**
 * 3x3の箱を用意
 * @return {void}
 */
const setBoxes = () => {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.className = "box-area__item";
    div.id = `box-${i}`;
    box_area.appendChild(div);

    let _dom = document.getElementById(`box-${i}`);
    boxes.push({
      dom: _dom,
      flag: false,
    });
  }
};

/**
 * 箱の凹凸ランダム配置
 * @return {void}
 */
function setBoxFlag() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].flag = Math.floor(Math.random() * 10) >= 5 ? true : false;
    if (boxes[i].flag) {
      boxes[i].dom.classList.remove("box-area__item--active");
      boxes[i].dom.classList.add("box-area__item--inactive");
    } else {
      boxes[i].dom.classList.remove("box-area__item--inactive");
      boxes[i].dom.classList.add("box-area__item--active");
    }
  }
}

/**
 * 最初に準備しちゃうよん
 * @immediate
 */
(async () => {
  await setBoxes();
  await setBoxFlag();
})();

/* それぞれ押下された時の処理 */
for (let i = 0; i < boxes.length; i++) {
  boxes[i].dom.addEventListener("click", () => {
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

/**
 * クリックマス+周囲マスを反転
 * @param {number} targets
 * @return {void}
 */
const switchColor = (targets) => {
  for (let i = 0; i < targets.length; i++) {
    if (boxes[targets[i]].flag) {
      boxes[targets[i]].dom.classList.remove("box-area__item--inactive");
      boxes[targets[i]].dom.classList.add("box-area__item--active");
    } else {
      boxes[targets[i]].dom.classList.remove("box-area__item--active");
      boxes[targets[i]].dom.classList.add("box-area__item--inactive");
    }
    boxes[targets[i]].flag = !boxes[targets[i]].flag;
  }
  if (click_cnt === 0) {
    startTime = Date.now();
    timer();
  }
  click();
  game();
};

/**
 * 時間計測
 * @return {void}
 */
const timer = () => {
  const date = new Date(Date.now() - startTime);
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  const ms = String(date.getMilliseconds()).padStart(3, "00");
  time.textContent = `${min}:${sec}.${ms}`;
  timeoutId = setTimeout(() => {
    timer();
  }, 10);
};

/**
 * クリック数をカウント
 * @return {void}
 */
const click = () => {
  click_cnt++;
  count.textContent = click_cnt;
};

/**
 * クリア判定
 * 全てtrueだった場合クリア
 * @return {void}
 */
const game = () => {
  const result = boxes.find((box) => !box.flag);
  if (result) return;

  clear_mess.textContent = "GAME CLEAR";
  clearTimeout(timeoutId);
};

/**
 * 各値リセット
 * @return {void}
 */
reset.addEventListener("click", () => {
  clearTimeout(timeoutId);
  setBoxFlag();
  click_cnt = 0;
  clear_mess.textContent = "";
  time.textContent = `00:00.000`;
  count.textContent = 0;
});
