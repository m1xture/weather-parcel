document.querySelector("[data-form]").addEventListener("submit", (e) => {
  setTimeout(() => {
    const formData = require("./form");
    console.log(formData);
  }, 500);
});
