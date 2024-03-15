import { alert, notice, info, success, error } from "@pnotify/core";
import { defaultModules } from "@pnotify/core/dist/PNotify.js";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import * as PNotifyDesktop from "@pnotify/desktop";
defaultModules.set(PNotifyMobile, {});

document.querySelector("[data-input]").addEventListener(
  "input",
  _.debounce((e) => {
    if (e.target.value === "") {
      return;
    }
    const url = `https://restcountries.com/v3.1/name/${e.target.value.trim()}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.length === 0) {
          return;
        }
        alert({ text: "laalal" });
      });
  }, 500)
);
console.log("laalal");
