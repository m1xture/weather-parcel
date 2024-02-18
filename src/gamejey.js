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
  //   PNotify.notice({
  //     text: `lflflf by me`,
  //     stack: myStack,
  //   });
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
