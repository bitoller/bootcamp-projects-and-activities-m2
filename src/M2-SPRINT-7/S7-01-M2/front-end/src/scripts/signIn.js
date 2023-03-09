import { signIn } from "./requests.js";
import { createSnackbar } from "./snackbar.js";

function menuButton() {
  const button = document.querySelector(".button-open");
  button.addEventListener("click", () => {
    let buttons = document.querySelector(".header-buttons-show");
    buttons.classList.toggle("show");
    let btnImg = document.querySelector(".menu-button-img");
    if (buttons.classList.contains("show") == true) {
      btnImg.src = "../assets/x.png";
    } else {
      btnImg.src = "../assets/menu.png";
    }
  });
}

function clearTokenStorage() {
  localStorage.removeItem("token");
}

function buttons() {
  const signUpHeader = document.querySelector("#header-button-signup");
  const signUpMain = document.querySelector("#main-button-signup");
  signUpHeader.addEventListener("click", signUpRedirect);
  signUpMain.addEventListener("click", signUpRedirect);
  const homeHeader = document.querySelector("#header-button-home");
  homeHeader.addEventListener("click", homeRedirect);
}

function signUpRedirect() {
  window.location.replace("../pages/signUp.html");
}

function homeRedirect() {
  window.location.replace("../../index.html");
}

function signInForm(event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  if (email == "") {
    createSnackbar("fill out email!", true);
    return;
  }
  if (password == "") {
    createSnackbar("fill out password!", true);
    return;
  }
  signIn(email, password);
}

function loginButton() {
  const loginButton = document.querySelector("#submit");
  loginButton.addEventListener("click", signInForm);
}

menuButton();
clearTokenStorage();
buttons();
loginButton();
