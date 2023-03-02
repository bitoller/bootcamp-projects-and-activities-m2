import { snackbarSignUp } from "./snackbar.js";

async function signup(username, email, password, avatar) {
  let user = {
    username: username,
    email: email,
    password: password,
    avatar: avatar,
  };
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  const newUser = await fetch("http://localhost:3333/users/create", options)
    .then((response) => response.json())
    .then((response) => {
      snackbarSignUp();
    })
    .catch((err) => console.error(err));
}

function submitSignup() {
  const submitButton = document.querySelector("#submit");
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = document.querySelector("#user").value;
    const email = document.querySelector("#email").value;
    const avatar = document.querySelector("#photo").value;
    const password = document.querySelector("#password").value;
    if (username != "" && email != "" && avatar != "" && password != "") {
      signup(username, email, password, avatar);
    }
  });
}

function backToLoginListener() {
  const backToLoginButton1 = document.querySelector("#backtologin1");
  backToLoginButton1.addEventListener("click", (event) => {
    backToLogin(event);
  });
  const backToLoginButton2 = document.querySelector("#backtologin2");
  backToLoginButton2.addEventListener("click", (event) => {
    backToLogin(event);
  });
}

function backToLogin(event) {
  event.preventDefault();
  window.location.replace("../index.html");
}

backToLoginListener();
submitSignup();
