import formData from "./data";

const formEl = document.querySelector("[data-form]");
const msgBlockEl = document.querySelector("[data-msg]");
const msgTextEl = document.querySelector("[data-msg-text]");

function hideMsg() {
  return msgBlockEl.classList.remove("shown-msg");
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let errs = 0;

  if (
    formEl.username.value === "" ||
    formEl.email.value === "" ||
    formEl.message.value === ""
  ) {
    msgTextEl.textContent = "Error❌";
    msgBlockEl.classList.add("shown-msg");
    setTimeout(hideMsg, 4500);
  } else {
    module.exports = {
      username: e.currentTarget.username.value,
      email: e.currentTarget.email.value,
      message: e.currentTarget.message.value,
    };
    msgTextEl.textContent = "Success🎊";
    msgBlockEl.classList.add("shown-msg");
    setTimeout(hideMsg, 4500);
  }
  document.querySelector(".message__close").addEventListener("click", hideMsg);

  e.currentTarget.reset();
});
