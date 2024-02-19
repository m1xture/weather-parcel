import * as PNotify from "@pnotify/core/dist/PNotify.js";

import { alert, defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import * as PNotifyDesktop from "@pnotify/desktop";
defaultModules.set(PNotifyMobile, {});

// alert({
//   text: "Notice me, senpai!",
// });
// const myStack = new PNotify.Stack({ dir1: "down", firstpos1: 25 });
// PNotify.notice({
//   text: `lflflf by me`,
//   stack: myStack,
// });

const textElem = document.querySelector("[data-key]");

const arrayOfKeys = [
  "KeyS",
  "KeyH",
  "KeyK",
  "KeyB",
  "KeyU",
  "KeyQ",
  "KeyL",
  "KeyP",
  "KeyV",
  "KeyC",
];

let currIndex = 0;

document.addEventListener("keydown", (evt) => {
  evt.preventDefault();
  if (evt.code === arrayOfKeys[currIndex]) {
    updateIndex();
    renderText();
  } else {
    sendLoseAlert();
  }
});

const myStack = new PNotify.Stack({ dir1: "down", firstpos1: 25 });

function sendLoseAlert() {
  PNotify.error({
    title: "Lose!",
    text: "",
    modules: new Map([...PNotify.defaultModules, [PNotifyDesktop, {}]]),
  });
}

function updateIndex() {
  currIndex++;
  if (currIndex === arrayOfKeys.length) {
    currIndex = 0;
  }
}

function renderText() {
  textElem.textContent = arrayOfKeys[currIndex];
}
renderText();

//todo: #2

const canvaEl = document.getElementById("sales-chart");

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};
const salesChart = new Chart(canvaEl, { type: "line", data: chartData });
