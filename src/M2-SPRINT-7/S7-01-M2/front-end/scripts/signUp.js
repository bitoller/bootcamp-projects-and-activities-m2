import { signUp } from "./requests.js";
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
  const homeHeader = document.querySelector("#header-button-home");
  const signInHeader = document.querySelector("#header-button-signin");
  homeHeader.addEventListener("click", homeRedirect);
  signInHeader.addEventListener("click", signInRedirect);
  const homeMain = document.querySelector("#back-to-signin");
  homeMain.addEventListener("click", homeRedirect);
}

function homeRedirect() {
  window.location.replace("../index.html");
}

function signInRedirect() {
  window.location.replace("./pages/signIn.html");
}

function signUpForm(event) {
  event.preventDefault();
  const name = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const professionalLevel = document.querySelector("#professional-level").value;

  if (name == "") {
    createSnackbar("fill out name!", true);
    return;
  }
  if (email == "") {
    createSnackbar("fill out email!", true);
    return;
  }
  if (password == "") {
    createSnackbar("fill out password!", true);
    return;
  }
  signUp(name, password, email, professionalLevel);
}

function submitButton() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", signUpForm);
}

menuButton();
buttons();
submitButton();
