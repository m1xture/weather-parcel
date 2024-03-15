import { alert, notice, info, success, error } from "@pnotify/core";
import { defaults } from "@pnotify/core";
defaults.styling = "material";
defaults.icons = "material";

document.querySelector("[data-form]").addEventListener("submit", (e) => {
  setTimeout(() => {
    const formData = require("./form");
    const noticeA = notice({ text: "lalala" });
    console.log(noticeA);
  }, 500);
});

console.log("alalala");
